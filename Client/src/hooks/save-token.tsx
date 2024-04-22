import { useContext } from "react";
import { TokenContext } from "../context/TokenProvider";

// Custom hook to access token
export const useSaveToken = () => {
  const { saveToken } = useContext(TokenContext);
  return saveToken;
};