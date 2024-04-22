import { useContext } from "react";
import { TokenContext } from "../context/TokenProvider";

// Custom hook to access token
export const useToken = () => {
  const { token } = useContext(TokenContext);
  return token;
};