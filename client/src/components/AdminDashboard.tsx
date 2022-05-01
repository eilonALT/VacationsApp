import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import LogoutIcon from '@mui/icons-material/Logout';
import { setUser } from "../features/userSlice";
import { setVacations } from "../features/vacationsSlice";


const AdminDashboard = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user.value);
    const vacations = useSelector((state: any) => state.vacations.value);
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(setUser([]))
        navigate('/login');
    }

    useEffect(() => {
        console.log('Vacations.tsx: useEffect()');
        fetch('http://localhost:5000/api/vacations')
            .then(res => res.json())
            .then(data => {
                console.log(data.data);
                dispatch(setVacations(data.data));
            })
    }, [])

    return (
        <div className="AdminDashboard">
            <br /><br />
            <h1>Admin Dashboard</h1>
            <p>Welcome to the admin dashboard</p>
            <button onClick={handleLogout} style={{ cursor: "pointer", background: "none", border: "none", position: "absolute", left: "10vh", top: "10vh" }}>
                <LogoutIcon fontSize="large" />
            </button>
            
        </div>
    );
}


export default AdminDashboard;