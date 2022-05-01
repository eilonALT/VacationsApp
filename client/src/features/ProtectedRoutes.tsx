import { Navigate, Outlet } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const getUserFromLocalStorage = () => {
    const user = localStorage.getItem("user");
    if (user) {
        return JSON.parse(user);
    }
    return null;
};

const useAuth = () => {
    const user = getUserFromLocalStorage();
    console.log('useAuth: user', user);
    if (user?.role === "user") {
        return true;
    }
    return false;
}

const ProtectedRoutes = () => {
    const isAuth = useAuth()
    useEffect(() => {
        console.log('ProtectedRoutes.tsx: useEffect()');
        console.log(isAuth);
    }, [isAuth])
    return (isAuth ? <Outlet /> : <Navigate to="/login" />)
}


export default ProtectedRoutes 