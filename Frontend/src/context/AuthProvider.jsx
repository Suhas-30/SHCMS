import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext({
    isAuthenticated: false,
    user: null,
    login: () => {},
    logout: () => {}
});

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    
    const login = (customerData) => {
        setAuthenticated(true);
        setUser(customerData);
    }

    const logout = () => {
        setAuthenticated(false);
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
};
