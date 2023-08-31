import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../components/signin.css';
import { Link } from 'react-router-dom'; // Import Link


const SigninForm = () => {

   

    const [email, setEmail] = useState('');
    const [isvalidEmail, setIsValidEmail]=useState(true);

    const [password, setPassword] = useState('');
    const [isvalidPass, setIsValidPass]=useState(true);

    const [submitted, setSubmitted] = useState(false);


   

    const handleSubmit = (event) => {

        const isEmailValid = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/.test(email);
        const isPassValid = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/.test(password);
    
        setIsValidEmail(isEmailValid);
        setIsValidPass(isPassValid);


        event.preventDefault();
        if(isvalidEmail){
            console.log('Email is Valid',email);
        }else{
            console.log('Email is not valid');
        };
        if(isvalidPass){
            console.log('Password is Valid',password);
        }else{
            console.log('Password is not valid');
        };
       if(isvalidEmail && isPassValid){
        setSubmitted(true);
       }
        
       

    };
    return (
        <div className="center">
            <div className="container1">
                <div className="logo">F<span className="U" >U</span><span className="N" >N</span><span className="D" >D</span><span className="O" >OO</span></div>
               <div className="signin"> <h2 id="signin">Sign in</h2>
                <p id="google">with your Google Account</p></div>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="registerform">

                        <div className="emailaddress">
                            <TextField id="email1" label="email" variant="outlined" value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                                

                        </div>
                        {!isvalidEmail && <p className="error-message1">Email is not valid</p>}

                        <div className="pass">
                            <TextField id="password1" type="password" label="password" variant="outlined" value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                                
                        </div>
                        {!isvalidPass && <p className="error-message1">Password is not valid</p>}

                        <a href="forget" id="link1">forget password?</a>
                        <Link to="/signup" id="link2">Create Account</Link> {/* Use Link */}

                    </div>


                    <Button variant="Link" id="button1" type="submit" >Sign in</Button>

                    {submitted && <p id="submit">Login successfully!</p>}

                </form>
            </div>
        </div>


    );
}

export default SigninForm
