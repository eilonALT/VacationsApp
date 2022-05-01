import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setVacations } from "../features/vacationsSlice";
import VacationCard from "./VacationCard";
import LogoutIcon from '@mui/icons-material/Logout';
import { setUser } from "../features/userSlice";


const Vacations = () => {
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
        <div className="Vacations">
            <button onClick={handleLogout} style={{ cursor: "pointer", background: "none", border: "none", position: "absolute", left: "10vh", top: "10vh" }}>
                <LogoutIcon fontSize="large" />
            </button>
            <br />
            <h1>Vacations</h1>
            <br />
            <h2>{`Welcome ${user?.firstName} ${user?.lastName}`}</h2>
            {vacations.map((vacation: any) => (<VacationCard key={vacation.id} vacation={vacation} />))}
        </div>
    )
}

export default Vacations;