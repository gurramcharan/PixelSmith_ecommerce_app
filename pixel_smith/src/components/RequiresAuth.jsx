import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "..";

export function RequiresAuth({ children }) {
  const {authState} = useContext(AuthContext);
  const location = useLocation();
  return authState.token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}
