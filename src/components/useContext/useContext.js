import React, { useState, useEffect, createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config'

export const AuthContext = createContext();

const auth = getAuth(app)
const UseContext = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const googleSignin = (provider)=>{
        return signInWithPopup(auth, provider)
    }
    
    const githubSignin = (provider)=>{
        return signInWithPopup(auth, provider)
    }
    const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)

    }
    useEffect(() => {
        const unsuscribed = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => unsuscribed()
    }, [])

    const authInfo = { createUser, googleSignin, githubSignin, signin, setLoading, updateUserProfile, user, logOut };

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};



export default UseContext;