import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../services/firebase/firebase-config";
import { useUserType } from "./UserTypeContext";
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const { userType } = useUserType();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth) {
      setAuth(JSON.parse(storedAuth));
    }
    setIsLoading(false);
  }, []);

  const login = async () => {
    setIsLoading(true);
    try {
      const result = await signInWithPopup(firebaseAuth, provider);
      if (result.user) {
        const createdToken = await result.user.getIdToken();
        // console.log(createdToken);
        const res = await fetch(
          `${import.meta.env.VITE_SITE}/auth/${userType}`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${createdToken}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (!res.ok) {
          setAuth(null);
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setAuth(data.user);
        // console.log(data.user)
        // localStorage.setItem("auth", JSON.stringify(authData));
      } else {
        setAuth(null);
        localStorage.removeItem("auth");
        throw new Error("Authentication failed");
      }
    } catch (error) {
      console.error("Mentor login error:", error);
      setAuth(null);
      // localStorage.removeItem("auth");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    firebaseAuth
      .signOut()
      .then(() => {
        setAuth(null);
        // localStorage.removeItem("auth");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  useEffect(() => {
    if (auth === null && !isLoading) {
      navigate("/");
    }
    // console.log(auth)
  }, [auth, navigate, isLoading]);

  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        logout,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
