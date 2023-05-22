import { createContext} from "react";

export const AuthContext = createContext({ isLoggedIn: false });

export function AuthProvider({ children }) {
  const handleLogin = async () => {
    try {
      const credentials = {
          email: "adarshbalika@gmail.com",
          password:"adarshbalika"
        }
  
        const res = await fetch("/api/auth/login",{
            method: "POST",
            body: JSON.stringify(credentials)
          })
  
          const {encodedToken} = await res.json();
          // to store the token in localStorage
          localStorage.setItem("token", encodedToken);
          // to get the token on the console
        //   console.log(localStorage.getItem("token"));
          
  
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider value={{ handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
