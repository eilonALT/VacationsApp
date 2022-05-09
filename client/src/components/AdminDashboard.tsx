import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import LogoutIcon from '@mui/icons-material/Logout';
import { setUser } from "../features/userSlice";
import { setVacations } from "../features/vacationsSlice";
import { Button } from "@mui/material";
import VacationCard from "./VacationCard";
import CreateVacation from "./CreateVacation";

const AdminDashboard = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user.value);
    const vacations = useSelector((state: any) => state.vacations.value);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);



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
            <br /><br />
            <h2>Vacations</h2>
            <Button onClick={handleClickOpen} style={{ width: "90%" }} variant="contained" color="primary">
                new vacation
            </Button>
            <CreateVacation open={open} handleClose={handleClose} />
            <br /><br />
            {vacations.map((vacation: any) => (<VacationCard key={vacation.id} vacation={vacation} />))}
        </div>
    );
}


export default AdminDashboard;