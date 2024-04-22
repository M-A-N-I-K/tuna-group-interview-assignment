import { useContext } from "react";
import { TokenContext } from "../context/TokenProvider";

// Custom hook to access token
export const useAuthState = () => {
  const { isAuthenticated } = useContext(TokenContext);
  return isAuthenticated();
};