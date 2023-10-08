/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import auth from "./../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const singIn =(email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }
  const singInWithGoogle =()=>{
    return signInWithPopup(auth, googleProvider);
  }

  const authInfo = { user, createUser, singIn, singInWithGoogle };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
