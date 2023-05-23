import { createContext, useReducer, useState} from "react";
import { AuthReducer } from "../reducers/AuthReducer";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext({ isLoggedIn: false });

export const AuthProvider = ({children}) => {
  const initialAuthState = {
    user:{},
    token:"",
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

  const userLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    authDispatch({type:"setUser",payload:{}})
    authDispatch({type:"setToken", payload:""})
  }

  return(
    <AuthContext.Provider value={{authState,userLogged,userLogout,errorMessage}}>
      {children}
    </AuthContext.Provider>
  )
}