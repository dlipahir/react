import { createContext, useEffect, useState } from "react";

import { onAuthStateChangedListener, createUserDocAuth } from "../utlis/firebase/firebase.utils";
//actual value want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            console.log(user);
            if (user) {
                createUserDocAuth(user);
            }
            setCurrentUser(user);
        });
        return unsubscribe;
    }, [])

    return (<UserContext.Provider value={value}>{children}</UserContext.Provider>);
}