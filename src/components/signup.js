import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../components/signup.css'
import { Link } from 'react-router-dom'; // Import Link
import LoginImg from '../components/Login1.png';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


const SignupForm = () => {
    const [firstname, setFirstName] = useState('');
    const [isValidFName, setIsValidFName] = useState(true);

    const [lastname, setLastName] = useState('');
    const [isvalidLName, setIsValidLName] = useState(true);

    const [email, setEmail] = useState('');
    const [isvalidEmail, setIsValidEmail] = useState(true);

    const [password, setPassword] = useState('');
    const [isvalidPass, setIsValidPass] = useState(true);

    const [confirmpassword, setConfirmPass] = useState('');
    const [isvalidConfirm, setIsValidConfirm] = useState(true);

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

        if (isValidFName) {
            console.log('FirstName is Valid', firstname);
        } else {
            console.log('FirstName is not valid');
        };
        if (isvalidLName) {
            console.log('LastName is Valid', lastname);
        } else {
            console.log('LastName is not valid');
        };
        if (isvalidEmail) {
            console.log('Email is Valid', email);
        } else {
            console.log('Email is not valid');
        };
        if (isvalidPass) {
            console.log('Password is Valid', password);
        } else {
            console.log('Password is not valid');
        };
        if (isvalidConfirm) {
            console.log('COnfirm password is Valid', confirmpassword);
        } else {
            console.log('Confirm Password is not valid');
        };
        if (isFNameValid && isLNameValid && isEmailValid && isPassValid && isConfirmValid) {
            setSubmitted(true);
        }
    };
    return (
        <header>
            <div className="imgform">
                <div className="leftcontainer">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="registerform">
                            <div className="logo">F<span className="U" >U</span><span className="N" >N</span><span className="D" >D</span><span className="O" >OO</span></div>
                            <p id="create">Create Your FunDooNoteApp Account</p>
                            <div className="form-container">
                                <div className="firstlast">
                                    <div>
                                        <TextField id="firstname" label="First name" variant="outlined" required value={firstname}
                                            onChange={(e) => setFirstName(e.target.value)} />
                                        {!isValidFName && <p className="error-message">First name is not valid</p>}
                                    </div>
                                    <div>
                                        <TextField id="lastname" label="Last name" variant="outlined" required value={lastname}
                                            onChange={(e) => setLastName(e.target.value)} />
                                        {!isvalidLName && <p className="error-message">Last name is not valid</p>}
                                    </div>
                                    </div>


                                    <TextField id="email" label="email" variant="outlined" required value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                    {!isvalidEmail && <p className="error-message">Email is not valid</p>}
                                    <div className="passconfirm">
                                        <div>
                                        <TextField id="password" type="password" label="password" variant="outlined" required value={password}
                                            onChange={(e) => setPassword(e.target.value)} />
                                        {!isvalidPass && <p className="error-message">Password is not valid</p>}
                                        </div>
                                        <div>

                                        <TextField id="confirmpass" type="password" label="confirm" variant="outlined" required value={confirmpassword}
                                            onChange={(e) => setConfirmPass(e.target.value)} />
                                        {!isvalidConfirm && <p className="error-message">Confirm password is not valid</p>}
                                        </div>
                                    </div>
                                </div>

                                <p id="passpara">Use 8 or more characters with a mix of letters, numbers & symbols</p>
                                <div className="check">
                                    <FormControlLabel id="check" control={<Checkbox defaultChecked />} label="Show Password" value={password}
                                        onChange={(e) => console.log(e.password)} />
                                </div>

                                <div className="buttondiv">
                                    <Link to="/signin" id="link3">Sign In instead</Link> {/* Use Link */}
                                    <Button id="button" variant="contained" type="submit" >Register</Button>
                                </div>
                            </div>
                            {submitted && <p id="submit">Form submitted successfully!</p>}
                            { }
                    </form>
                </div>
                <div className="right">
                    <img src={LoginImg} id="img1" alt="login" />
                </div>
            </div>
        </header>
    );
}
export default SignupForm
