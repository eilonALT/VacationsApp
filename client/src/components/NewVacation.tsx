import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function NewVacation(props: any) {

    const [newVacation, setNewVacation] = React.useState({
        description: '',
        img: '',
        location: '',
        startTime: '',
        endTime: '',
        price: 0,
        followers: 0,
    });


    const handleInputChange = (e: any, name: string) => {
        let inputValue = e.target.value
        let tempNewVacation = {
            ...newVacation,
            [name]: inputValue
        }

        setNewVacation(tempNewVacation)
    }

    const handlesignup = (e: any) => {

        if (newVacation.description === "" || newVacation.img === "" || newVacation.location === "" || newVacation.startTime === "" || newVacation.endTime === "" || newVacation.price === 0) {
            alert("Please enter all fields");
        }
        else {
            fetch(`http://localhost:5000/api/vacations`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...newVacation
                })
            })
                .then(res => res.json())
                .then(data => {
                    if (!data.success) {
                        console.log(data.message);
                    }
                    else if (data.success) {
                        alert("added Successfully");
                        props.handleClose();
                    }
                })
        }
    }

    return (
        <div>
            <Dialog
                style={{ borderRadius: "10px" }}
                open={props.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={props.handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <div className='signup-container'>
                    <h1>New Vacation</h1>
                    <form action="" className='signup-form'>
                        <TextField
                            required
                            id="outlined"
                            label="description"
                            defaultValue={newVacation.description}
                            onChange={(e) => handleInputChange(e, "description")}
                        />
                        <TextField
                            required
                            id="outlined"
                            label="img"
                            defaultValue={newVacation.img}
                            onChange={(e) => handleInputChange(e, "img")}
                        />
                        <TextField
                            required
                            id="outlined-error-helper-text"
                            label="location"
                            defaultValue={newVacation.location}
                            onChange={(e) => handleInputChange(e, "location")}
                        />
                        <label htmlFor="">start date</label>
                        <TextField
                            id="outlined"
                            required
                            type={'date'}
                            defaultValue={newVacation.startTime}
                            onChange={(e: any) => handleInputChange(e, "startTime")}
                        />
                        <label htmlFor="">end date</label>
                        <TextField
                            id="outlined"
                            type={'date'}
                            required
                            defaultValue={newVacation.endTime}
                            onChange={(e: any) => handleInputChange(e, "endTime")}
                        />
                        <TextField
                            id="outlined"
                            label="price"
                            required
                            defaultValue={newVacation.price}
                            onChange={(e: any) => handleInputChange(e, "price")}
                        />
                        <Button onClick={(e) => handlesignup(e)} variant="contained" color="primary">
                            submit
                        </Button>
                    </form>
                </div>
            </Dialog>
        </div>
    );
}