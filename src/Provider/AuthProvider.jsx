import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../config/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [spinner, setSpinner] = useState(true);

  // creating a new user
  const createUser = (email, password) => {
    setSpinner(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Pop-up signing with google authentication
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleAuthProvider);
  };

  // Direct login with email and password
  const loginUser = (email, password) => {
    setSpinner(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign-out authentication
  const logOut = () => {
    setSpinner(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setSpinner(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    loginUser,
    logOut,
    signInWithGoogle,
    spinner,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
