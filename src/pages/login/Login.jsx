import React, { useState } from "react"
import "./Login.scss"
import { Button, TextField } from "@mui/material";

export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

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

        }
    };

    const passwordValid = (password) => {
        return true;
    }

    const emailValid = (email) => {
        return true;
    }

    return (
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
    )
}
