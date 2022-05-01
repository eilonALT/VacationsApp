import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const getUserFromLocalStorage = () => {
    const user = localStorage.getItem("user");
    if (user) {
        return JSON.parse(user);
    }
    return {};
};

const useAuth = () => {
    const user = getUserFromLocalStorage();
    console.log("useAuth: user", user);
    if (user?.role === 'admin') {
        return true;
    }
    return false;
}

const AdminRoutes = () => {
    const isAuth = useAuth()
    useEffect(() => {
        console.log('AdminRoutes.tsx: useEffect()');
        console.log(isAuth);
    }, [isAuth])
    return (isAuth ? <Outlet /> : <Navigate to="/vacations" />)
}

export default AdminRoutes