import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../components/signup.css'
import { Link } from 'react-router-dom'; // Import Link
import LoginImg from '../components/Login1.png';




const SignupForm = () => {
    const [firstname, setFirstName] = useState('');
    const [isValidFName, setIsValidFName] = useState(true);

    const [lastname, setLastName] = useState('');
    const [isvalidLName, setIsValidLName]=useState(true);

    const [email, setEmail] = useState('');
    const [isvalidEmail, setIsValidEmail]=useState(true);

    const [password, setPassword] = useState('');
    const [isvalidPass, setIsValidPass]=useState(true);

    const [confirmpassword, setConfirmPass] = useState('');
    const [isvalidConfirm, setIsValidConfirm]=useState(true);

    const [submitted, setSubmitted] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();


 const isFNameValid = /^[a-zA-Z ]{2,30}$/.test(firstname);
 const isLNameValid = /^[a-zA-Z ]{2,30}$/.test(lastname);
 const isEmailValid = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/.test(email);
 const isPassValid = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/.test(password);
 const isConfirmValid = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/.test(confirmpassword);


 setIsValidFName(isFNameValid);
 setIsValidLName(isLNameValid);
 setIsValidEmail(isEmailValid);
 setIsValidPass(isPassValid);
 setIsValidConfirm(isConfirmValid);



        
        if(isValidFName){
            console.log('FirstName is Valid',firstname);
        }else{
            console.log('FirstName is not valid');
        };
        if(isvalidLName){
            console.log('LastName is Valid',lastname);
        }else{
            console.log('LastName is not valid');
        };
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
        if(isvalidConfirm){
            console.log('COnfirm password is Valid',confirmpassword);
        }else{
            console.log('Confirm Password is not valid');
        };
        if (isFNameValid && isLNameValid && isEmailValid && isPassValid && isConfirmValid) {
            setSubmitted(true); 
        }
    };
    return (
        <div className="img">
        <div className="container">
             <div className="logo">F<span className="U" >U</span><span className="N" >N</span><span className="D" >D</span><span className="O" >OO</span></div>
            <h2 id="create">Create Your FunDooNoteApp Account</h2>
            <form className="form" onSubmit={handleSubmit}>
           
                <div className="registerform">
                    <div className="name">
                        <div className="firstname">
                            <TextField id="firstname" label="First name" variant="outlined" value={firstname}
                                onChange={(e) => setFirstName(e.target.value)} />
                                {!isValidFName && <p className="error-message">First name is not valid</p>}

                        </div>
                        <div className="lastname">
                            <TextField id="lastname" label="Last name" variant="outlined" value={lastname}
                                onChange={(e) => setLastName(e.target.value)} />
                                {!isvalidLName&& <p className="error-message">Last name is not valid</p>}

                        </div>
                    </div>
                    <div className="email">
                        <TextField id="email" label="email" variant="outlined" value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                            {!isvalidEmail && <p className="error-message">Email is not valid</p>}

                    </div>
                    <div className="pass">
                        <div className="password">
                            <TextField id="password" type="password" label="password" variant="outlined" value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                                {!isvalidPass&& <p className="error-message">Password is not valid</p>}

                        </div>
                        <div className="confirmpass">
                            <TextField id="confirmpass" type="password" label="confirm" variant="outlined" value={confirmpassword}
                                onChange={(e) => setConfirmPass(e.target.value)} />
                                {!isvalidConfirm && <p className="error-message">Confirm password is not valid</p>}

                        </div>
                        
                    </div>
                    <p>Use 8 or more characters with a mix of letters, numbers & symbols</p>

                </div>
                <div className="buttondiv">
                <Link to="/signin" id="link">Sign In instead</Link> {/* Use Link */}
                <Button id="button" variant="contained" type="submit" >Register</Button>
               
                </div>
                {submitted && <p id="submit">Form submitted successfully!</p>}
                {}
                
            </form>
        </div>
        <img src={LoginImg} id="img1" alt="login"/>
        </div> 

    );
}

export default SignupForm
