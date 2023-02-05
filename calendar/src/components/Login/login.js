import React from "react"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const handleNavigation = () => {

        navigate('home');
    };

    const [errorMsg, setErrorMsg] = useState({});
    const [isSubmit, setIsSubmitted] = useState(false);
    const database = [
        {
            username: "admin",
            password: "admin"
        }
    ];
    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };
    
    const handleSubmit = (event) => 
    {
        event.preventDefault();
        var { uname, pass } = document.forms[0];
        const userData = database.find((user) => user.username === uname.value);
        if (userData) {
            if (userData.password !== pass.value) {
                setErrorMsg({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            setErrorMsg({ name: "uname", message: errors.uname });
        }
    };
    const renderErrorMessage = (name) =>
        name === errorMsg.name && (
            <div className="error">{errorMsg.message}</div>
        );
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="submit">
                    </input>
                </div>
            </form>
        </div>
    );

    return (
        <>
            <div className="app">
                <div className="login-form">
                    <div className="title">Sign In</div>
                    {isSubmit ?<><div>User is successfully logged in.</div><button onClick={handleNavigation}>Home</button></> : renderForm}


                </div>
            </div>







        </>
    )

}

export default Login;
