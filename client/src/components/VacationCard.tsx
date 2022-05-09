import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setVacations } from '../features/vacationsSlice';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const VacationCard = (props: any) => {
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user.value);
    const vacations = useSelector((state: any) => state.vacations.value);

    const handleFollow = (e: any) => {
        let newVacation = {...props.vacation};
        
        if (e.target.checked) {
            fetch(`http://localhost:5000/api/vacations/${props.vacation.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...newVacation,
                    followers: ++newVacation.followers
                })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        } else {
            fetch(`http://localhost:5000/api/vacations/${props.vacation.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...newVacation,
                    followers: --newVacation.followers
                })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
    }


    return (
        <div style={{ fontSize: "smaller" }} key={`key is -${props.id}`} className="VacationCard">
            <div className="VacationCard__image_container">
                <Checkbox onClick={(e) => { handleFollow(e) }} style={{ position: "absolute", left: "90%" }} {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                <img className="VacationCard__image" src={`https://1.bp.blogspot.com/-grP9aKaecSE/T2REJiVs04I/AAAAAAAAByo/8ucODDyrfvY/s1600/rome+2.jpg`} alt="" />
            </div>
            <div className="VacationCard__content">
                <div className="VacationCard__content__title">
                    <h1 style={{ textDecoration: "underline", fontSize: "larger" }} >{props.vacation.location}</h1>
                </div>
                <div className="VacationCard__content__description">
                    <p>{`"${props.vacation.description}"`}</p>
                </div>
                <div className='VacationCard__dates'>
                    <p>{`from ${props.vacation.startTime.slice(0, 10)} to ${props.vacation.endTime.slice(0, 10)}`}</p>
                </div>
                <p>{`price: ${props.vacation.price}$ ,  followers: ${props.vacation.followers}`}</p>
            </div>
        </div>
    )
}

export default VacationCard;