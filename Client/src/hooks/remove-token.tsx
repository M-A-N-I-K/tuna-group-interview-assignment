import { useContext } from "react";
import { TokenContext } from "../context/TokenProvider";

// Custom hook to access token
export const useLogout = () => {
  const { logout } = useContext(TokenContext);
  return logout;
};