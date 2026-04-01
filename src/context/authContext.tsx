import { createContext, useContext, useEffect, useState } from "react";
import { useNotification } from "./notificationContext";

export const AuthContext = createContext(null);

export const AuthProvider = (props: any) => {

    const [authDB, setAuthDB] = useState([
        { id: 1, username: "admin", password: "admin", role: "admin" }
    ]);

    const [authenticatedUser, setAuthenticatedUser] = useState(null);
    const [userRole, setUserRole] = useState('');
    const isLoggedIn = !!authenticatedUser;
    const { showNotification } = useNotification();

    const login = async (username: string, password: string) => {
        try {
            const response = authDB.find(user => user.username === username && user.password === password);
            if (response) {
                setUserRole(response.role);
                console.log(response)
                setAuthenticatedUser({ user_id: response.id, username: response.username, role: response.role });
                showNotification("Login successful", "success");
                return true;
            } else {
                showNotification("Login failed", "error");
                return false;
            }
        } catch (err) {
            console.log(err);
        }
    }

    const register = async (username: string, password: string) => {
        try {
            const res = authDB.find(user => user.username === username);
            if (res) {
                showNotification("Username already exists", "error");
                return false;
            }
            const response = [...authDB, { username: username, password: password, role: "user" }];
            setAuthDB(response);
            showNotification("Registration successful", "success");
            return true;
        } catch (err) {
            console.log(err);
        }
    }

    const logout = () => {
        setAuthenticatedUser(null);
        showNotification("Logged out", "info");
    };

    return (
        <AuthContext.Provider
            value={{
                authenticatedUser,
                isLoggedIn,
                login,
                logout,
                register,
                userRole
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
};

export default useAuth;
