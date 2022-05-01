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

export default function AlertDialogSlide(props: any) {

    const [newUser, setNewUser] = React.useState({
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
    });

    const [error, setError] = React.useState(false)
    const [helperText, setHelperText] = React.useState("")


    const handleInputChange = (e: any, name: string) => {
        let inputValue = e.target.value
        let tempNewUser = {
            ...newUser,
            [name]: inputValue
        }

        setNewUser(tempNewUser)
    }

    const handlesignup = (e: any) => {

        if (newUser.firstName === "" || newUser.lastName === "" || newUser.userName === "" || newUser.password === "") {
            alert("Please enter all fields");
        }
        else {
            fetch(`http://localhost:5000/api/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...newUser
                })
            })
                .then(res => res.json())
                .then(data => {
                    if (!data.success) {
                        setError(true);
                        setHelperText("username already exists");
                    }
                    else if (data.success) {
                        alert("signup Successful");
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
                    <h1>Sign Up</h1>
                    <form action="" className='signup-form'>
                        <TextField
                            required
                            id="outlined"
                            label="First Name"
                            defaultValue={newUser.firstName}
                            onChange={(e) => handleInputChange(e, "firstName")}
                        />
                        <TextField
                            required
                            id="outlined"
                            label="Last Name"
                            defaultValue={newUser.lastName}
                            onChange={(e) => handleInputChange(e, "lastName")}
                        />
                        <TextField
                            required
                            error={error}
                            id="outlined-error-helper-text"
                            label="Username"
                            defaultValue={newUser.userName}
                            onChange={(e) => handleInputChange(e, "userName")}
                            helperText={helperText}
                        />
                        <TextField
                            id="outlined"
                            label="Password"
                            required
                            type={'password'}
                            defaultValue={newUser.password}
                            onChange={(e: any) => handleInputChange(e, "password")}
                        />
                        <Button onClick={(e) => handlesignup(e)} variant="contained" color="primary">
                            Sign Up
                        </Button>
                    </form>
                </div>
            </Dialog>
        </div>
    );
}