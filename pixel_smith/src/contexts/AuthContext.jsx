import { createContext, useContext, useReducer, useState} from "react";
import { AuthReducer } from "../reducers/AuthReducer";
import { useLocation, useNavigate } from "react-router-dom";
// import { getCartProducts } from "../utils/CartUtil";
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
    console.log(initialAuthState)
    if(loginData.email && loginData.password !== ""){
      try {
        const config={
          method:"POST",
          body:JSON.stringify(loginData),
        }
        const res = await fetch("/api/auth/login", config);
        const resJson = await res.json();
        console.log(resJson)
        if (res.status === 200) {
          localStorage.setItem("user", JSON.stringify(resJson?.foundUser));
          localStorage.setItem("token",resJson?.encodedToken);
          authDispatch({type:"setUser",payload:resJson?.foundUser})
          authDispatch({type:"setToken",payload:resJson?.encodedToken})

          navigate(
            location?.state?.from?.pathname ? location?.state?.from?.pathname : "/" 
          )
        } else {
          setErrorMessage(resJson?.errors[0])
        }
      } catch (error) {
        userLogout();
        console.log(error.message)
        setErrorMessage(error.message)
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

          // Need to be changed later
          // localStorage.setItem("user", JSON.stringify(createdUser));
          // localStorage.setItem("token",encodedToken);

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

  }

  return(
    <AuthContext.Provider value={{authState,userLogged,userLogout,signUpUser,errorMessage}}>
      {children}
    </AuthContext.Provider>
  )
}