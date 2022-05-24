import { createContext, useContext, useEffect, useState} from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../auth/Firebase";

const UserContext = createContext();

const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'https://yoursite-dejare.vercel.app/dashboard',
    // This must be true.
    handleCodeInApp: true,
    iOS: {
      bundleId: 'com.example.ios'
    },
    android: {
      packageName: 'com.example.android',
      installApp: true,
      minimumVersion: '12'
    }
  };

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({})


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const logout = ()=> {
        return signOut(auth)
    }
    const sendSignInLinkToEmail = (auth, email, actionCodeSettings) => {
        return sendSignInLinkToEmail(auth, email, actionCodeSettings)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            console.log(currentUser)
            setUser(currentUser)
        })
        return unsubscribe();
    }, [])

    return (
        <UserContext.Provider value={{createUser, user, logout}}>
            {children}
        </UserContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(UserContext);
};
