import { createContext, useContext, useEffect, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    updateProfile,
    sendEmailVerification,
    sendPasswordResetEmail,
    updateCurrentUser,
} from "firebase/auth";
import { auth } from "../component/auth/Firebase";

//write a function that will send a verification email to the user


const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [Verified, setVerified] = useState()

    const createUser = (email, password) => {
        updateProfile(auth.currentUser);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const logout = () => {
        return signOut(auth);
    };
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };
    const sendSignInLinkToEmail = (auth, email, actionCodeSettings) => {
        return sendSignInLinkToEmail(auth, email, actionCodeSettings);
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        });
        return unsubscribe();
    }, []);
useEffect(() => {
    // write a function to check if there is a current user
    if (user != null || typeof user != "undefined"){
    const EmailVerified = onAuthStateChanged(auth, (currentUser)=>{
        setVerified (currentUser.emailVerified)
    })
    return EmailVerified()
}
    
}, [])
    return (
        <UserContext.Provider
            value={{
                createUser,
                user,
                logout,
                login,
                resetPassword,
                Verified
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(UserContext);
};
