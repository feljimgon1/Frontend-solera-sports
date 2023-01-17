import React, { useState } from "react"
import axios from 'axios';
import "./Login.scss"
import { Button, TextField } from "@mui/material";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { useEffect } from "react";

export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [users, setUsers] = useState([]);

    const submit = (event) => {
        event.preventDefault();
        if (!email) {
            setMessage("Email must be provided");
        } else if (!password) {
            setMessage("A password must be provided");
        } else if (!emailValid(email)) {
            setMessage("Please, enter a valid email");
        } else if (!passwordValid(password)) {
            setMessage("Please, enter a valid password");
        } else {
            let headers = {

            };
            axios.post("http://localhost:8080/api/v1/users");
        }
    };

    useEffect(() => {
        getUsers();
    }, [users]);

    const getUsers = () => {
        fetch("http://localhost:8080/api/v1/users")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    }

    const passwordValid = (password) => {
        return true;
    }

    const emailValid = (email) => {
        return true;
    }

    return (
        <>
            {console.log(users.length)}
            <div className="user-list">
                {users.length !== 0 ?

                    <>
                        {users?.map((user, index) => {
                            return (<div key={index}>{user}</div>)
                        })}
                    </>
                    :
                    <>
                        <Stack spacing={1}>
                            {/* For variant="text", adjust the height via font-size */}
                            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                            {/* For other variants, adjust the size with `width` and `height` */}
                            <Skeleton variant="circular" width={40} height={40} />
                            <Skeleton variant="rectangular" width={210} height={60} />
                            <Skeleton variant="rounded" width={210} height={60} />
                        </Stack>
                    </>
                }
            </div>
            <div className="login-container">
                <div className="login-card">
                    <div className="title">Login</div>
                    {message}
                    <form onSubmit={submit}>
                        <TextField
                            className="input"
                            id="email"
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)} />
                        <TextField
                            className="input"
                            id="password"
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)} />
                        <Button className="btn" type="submit" variant="contained" onClick={submit}>Contained</Button>
                    </form>

                </div>
            </div>
        </>

    )
}
