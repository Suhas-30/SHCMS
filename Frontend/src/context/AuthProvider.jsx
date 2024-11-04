import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext({
    isAuthenticated: false,
<<<<<<< HEAD
    user: null,
=======
>>>>>>> 7a9e8950d969671ba9843492bb92583c860f6b9e
    login: () => {},
    logout: () => {}
});

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setAuthenticated] = useState(false);
<<<<<<< HEAD
    const [user, setUser] = useState(null);
    
    const login = (customerData) => {
        setAuthenticated(true);
        setUser(customerData);
=======

    const login = () => {
        setAuthenticated(true);
>>>>>>> 7a9e8950d969671ba9843492bb92583c860f6b9e
    }

    const logout = () => {
        setAuthenticated(false);
<<<<<<< HEAD
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
=======
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
>>>>>>> 7a9e8950d969671ba9843492bb92583c860f6b9e
            {children}
        </AuthContext.Provider>
    )
};
