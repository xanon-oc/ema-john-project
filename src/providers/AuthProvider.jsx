import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //   Create User  //

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //  Login User  //

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Logout   //

  const logOut = () => {
    return signOut(auth);
  };

  //   Observer user auth state   //

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    //   Stop observing while unmounting   //
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = { user, createUser, signIn, logOut };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
