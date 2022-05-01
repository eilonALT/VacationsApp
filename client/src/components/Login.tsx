import { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setUser } from '../features/userSlice';
import { useSelector } from "react-redux";
import SignUp from './SignUp';
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const saveUserToLocalStorage = (user: any) => {
    localStorage.setItem('user', JSON.stringify(user));
}


const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state: any) => state.user.value);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    const handleLogin = (e: any, userName: string, password: string) => {
        e.preventDefault();

        if (userName === '' || password === '') {
            alert('Please enter username and password');
        }
        else {
            fetch(`http://localhost:5000/api/users/${userName}/${password}`)
                .then(res => res.json())
                .then(data => {
                    if (data.data[0].userName === undefined) {
                        alert(data.data);
                    }
                    else {
                        dispatch(setUser(data.data[0]));
                        saveUserToLocalStorage(data.data[0]);
                    }
                })
                .then(() => {
                    navigate('/');
                })
        }
    }

    useEffect(() => {
        console.log('Login.tsx: useEffect()');
        localStorage.removeItem('user');
    }, []);

    return (
        <div className="Login">
            <h1 style={{ marginBottom: "10vh", marginTop: "10vh", height: "10%", zIndex: "3" }}>Welcome To My Vacations App</h1>
            <div className="sign-container">
                <form className="form-container">
                    <label htmlFor="">User Name:</label>
                    <TextField
                        id="outlined"
                        label="username"
                        required
                        defaultValue={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {/* <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /> */}
                    <label htmlFor="">Password:</label>
                    {/* <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /> */}
                    <TextField
                        id="outlined"
                        label="password"
                        required
                        type={'password'}
                        defaultValue={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </form>
                <div className="sign-buttons">
                    <Button onClick={(e) => handleLogin(e, username, password)} variant="contained" color="primary">
                        Sign In
                    </Button>
                    <Button onClick={handleClickOpen} variant="contained" color="primary">
                        Sign Up
                    </Button>
                </div>
                <SignUp open={open} handleClose={handleClose} />
            </div>
        </div>
    )
}

export default Login;