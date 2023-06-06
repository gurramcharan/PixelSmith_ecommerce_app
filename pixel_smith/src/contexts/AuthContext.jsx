import { createContext, useContext, useReducer, useState} from "react";
import { AuthReducer } from "../reducers/AuthReducer";
import { useLocation, useNavigate } from "react-router-dom";
// import { getCartProducts } from "../utils/CartUtil";
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ApiContext} from "../index"

export const AuthContext = createContext({ isLoggedIn: false });

export const AuthProvider = ({children}) => {
  const {productDispatch} = useContext(ApiContext)
  const initialAuthState = {
    user:localStorage.getItem("user"),
    token:localStorage.getItem("token"),
  }
  const [authState,authDispatch] = useReducer(AuthReducer,initialAuthState)
  const[errorMessage,setErrorMessage] = useState("")
  const location = useLocation();
  const navigate = useNavigate();

  const userLogged = async (loginData) => {
    if(loginData.email && loginData.password !== ""){
      try {
        const config={
          method:"POST",
          body:JSON.stringify(loginData),
        }
        const res = await fetch("/api/auth/login", config);
        const resJson = await res.json();
        if (res.status === 200) {
          
          localStorage.setItem("user", JSON.stringify(resJson?.foundUser));
          localStorage.setItem("token",resJson?.encodedToken);
          authDispatch({type:"setUser",payload:resJson?.foundUser})
          authDispatch({type:"setToken",payload:resJson?.encodedToken})
          toast.success('Login Successfull!',{
            position:"top-center",
            autoClose:1000,
            theme:"colored",
            draggable:true,
          });
          setTimeout(() => {
            navigate(
              location?.state?.from?.pathname ? location?.state?.from?.pathname : "/" 
            )
          },2000)
          
        } else {
          setErrorMessage(resJson?.errors[0])
        }
      } catch (error) {
        userLogout();
        console.log(error.message)
      }
    }
  }

  const signUpUser = async (signupData) => {
    try {
      const {email,password,firstname,lastname} = signupData;
      const config = {
        method:"POST",
        body:JSON.stringify({
          email: email,
          password: password,
          firstName: firstname,
          lastName: lastname
        }),
      }

      const res = await fetch("/api/auth/signup",config);
      const resJson = await res.json()
      const {createdUser, encodedToken} = resJson

      if (res.status === 201) {
          authDispatch({type:"setUser",payload:createdUser})
          authDispatch({type:"setToken",payload:encodedToken})
          toast.success('New User Created!',{
            position:"top-center",
            autoClose:1000,
            theme:"colored",
            draggable:true,
          });
          navigate("/login")
      }

    } catch (error) {
      console.log("Error in Login user", error)
    }
  }


  const userLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    authDispatch({type:"setUser",payload:{}})
    authDispatch({type:"setToken", payload:""})
    productDispatch({ type: "setCart", payload: [] });
    toast.error('User Logged Out!',{
      position:"top-center",
      autoClose:1000,
      theme:"colored",
      draggable:true,
  });

  }

  return(
    <AuthContext.Provider value={{authState,userLogged,userLogout,signUpUser,errorMessage}}>
      {children}
    </AuthContext.Provider>
  )
}