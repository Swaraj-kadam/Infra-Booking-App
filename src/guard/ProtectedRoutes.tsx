import { useNavigate } from "react-router-dom";
import useAuth from "../context/authContext";
import { useNotification } from "../context/notificationContext";
import { useEffect } from "react";

const ProtectedRouteHOC = (WrapperComponent) => {
    const { isLoggedIn } = useAuth();
    const { showNotification } = useNotification();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            showNotification("Please login first !!");
            navigate("/login?message=Please login first", { replace: true });
        }
    }, [isLoggedIn])

    return <>{WrapperComponent}</>;
}

export default ProtectedRouteHOC