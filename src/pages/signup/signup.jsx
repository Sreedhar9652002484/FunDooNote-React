import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../signup/signup.css';
import { Link } from 'react-router-dom'; // Import Link
import LoginImg from '../../assests/Login1.png';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { signup } from "../../Services/dataservice/userservices";


const SignupForm = () => {

    const [userDetails, SetUserDetails] = useState({
        firstname: '',
        isValidFName: true,
        lastname: '',
        isValidLName: true,
        email: '',
        isValidEmail: true,
        password: '',
        isValidPass: true,
        confirmpassword: '',
        isValidConfirm: true,
        isShowPassword: false,
        isSubmitted: false
    });
    const [erroObj, setErrorOBJ] = useState({
        fNameError: false,
        fNameHelper: '',
        lNameError: false,
        lNameHelper: '',
        emailError: false,
        emailHelper: '',
        passError: false,
        passHelper: '',
        confirmError: false,
        confirmHelper: ''

    });
    //regex
    const isFNameValid = /^[a-zA-Z ]{2,30}$/;
    const isLNameValid = /^[a-zA-Z ]{2,30}$/;
    const isEmailValid = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/;
    const isPassValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const handleFName = (e) => {
        const NewValue = e.target.value;
        SetUserDetails({ ...userDetails, firstname: NewValue, isValidFName: isFNameValid.test(NewValue) })
        if (!userDetails.isValidFName) {
            setErrorOBJ({ ...erroObj, fNameError: true, fNameHelper: "First Name is not valid" })
        } else {
            setErrorOBJ({ ...erroObj, fNameError: false, fNameHelper: " " })
        }
    };
    const handleLName = (e) => {
        const NewValue = e.target.value;
        SetUserDetails({ ...userDetails, lastname: NewValue, isValidLName: isLNameValid.test(NewValue) });
        if (!userDetails.isValidLName) {
            setErrorOBJ({ ...erroObj, lNameError: true, lNameHelper: "Last Name is not valid" })
        } else {
            setErrorOBJ({ ...erroObj, lNameError: false, lNameHelper: " " })
        }

    };
    const handleEmail = (e) => {
        const NewValue = e.target.value;
        SetUserDetails({ ...userDetails, email: NewValue, isValidEmail: isEmailValid.test(NewValue) });
        if (!userDetails.isValidEmail) {
            setErrorOBJ({ ...erroObj, emailError: true, emailHelper: "Email is not valid" })
        } else {
            setErrorOBJ({ ...erroObj, emailError: false, emailHelper: " " })
        }

    };
    const handlePassword = (e) => {
        const NewValue = e.target.value;
        SetUserDetails({ ...userDetails, password: NewValue, isValidPass: isPassValid.test(NewValue) });

        if (!userDetails.isValidPass) {
            setErrorOBJ({ ...erroObj, passError: true, passHelper: "Password is not valid" })
        } else {
            setErrorOBJ({ ...erroObj, passError: false, passHelper: " " })
        }

    };
    const handleConfirm = (e) => {
        const NewValue = e.target.value;
        const newPass = userDetails.password;
        const isValid = NewValue === newPass;
        SetUserDetails({ ...userDetails, confirmpassword: NewValue, isValidConfirm: isValid });


        if (!userDetails.isValidConfirm) {
            setErrorOBJ({ ...erroObj, confirmError: true, confirmHelper: "Confirm Password is not valid" })
        } else {
            setErrorOBJ({ ...erroObj, confirmError: false, confirmHelper: " " })
        }
    };
    const handleShow = (e) => {
        SetUserDetails({ ...userDetails, isShowPassword: !userDetails.isShowPassword })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        ////Checking All Fields Are true
        if (userDetails.isValidFName && userDetails.isValidLName && userDetails.isValidEmail && userDetails.isValidPass && userDetails.isValidConfirm) {
            SetUserDetails({ ...userDetails, isSubmitted: true });
            console.log(userDetails);
            // setTimeout(() => {
            //     window.location.reload();
            // }, 3000)
            let response = await signup(userDetails);
            localStorage.setItem("token", response.data.data.id);
            console.log(response);
        }
    }
    return (
        <div className="main">
            <div className="imgform">
                <div className="leftcontainer">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="registerform">
                            <div className="logo">F<span className="U" >U</span><span className="N" >N</span><span className="D" >D</span><span className="O" >OO</span></div>
                            <p id="create">Create Your FunDooNoteApp Account</p>
                            <div className="form-container">
                                <div className="firstlast">
                                    <div>
                                        <TextField id="firstname" label="First name" variant="outlined" required
                                            value={userDetails.firstname}
                                            error={erroObj.fNameError}
                                            helperText={erroObj.fNameHelper}
                                            onChange={handleFName} />
                                        {/* {!userDetails.isValidFName && <p className="error-message">First name is not valid</p>} */}
                                    </div>
                                    <div>
                                        <TextField id="lastname" label="Last name" variant="outlined" required
                                            value={userDetails.lastname}
                                            onChange={handleLName}
                                            error={erroObj.lNameError}
                                            helperText={erroObj.lNameHelper}
                                        />
                                        {/* {!userDetails.isValidLName && <p className="error-message">Last name is not valid</p>} */}
                                    </div>
                                </div>


                                <TextField id="email" label="email" variant="outlined" required
                                    value={userDetails.email}
                                    onChange={handleEmail}
                                    error={erroObj.emailError}
                                    helperText={erroObj.emailHelper}
                                />
                                {/* {!userDetails.isValidEmail && <p className="error-message">Email is not valid</p>} */}
                                <div className="passconfirm">
                                    <div>
                                        <TextField id="password" label="password" variant="outlined" required
                                            type={userDetails.isShowPassword ? 'text' : 'password'}
                                            value={userDetails.password}
                                            onChange={handlePassword}
                                            error={erroObj.passError}
                                            helperText={erroObj.passHelper}
                                        />
                                        {/* {!userDetails.isValidPass && <p className="error-message">Password is not valid</p>} */}
                                    </div>
                                    <div>

                                        <TextField id="confirmpass" label="confirm" variant="outlined" required
                                            type={userDetails.isShowPassword ? 'text' : 'password'}
                                            value={userDetails.confirmpassword}
                                            onChange={handleConfirm}
                                            error={erroObj.confirmError}
                                            helperText={erroObj.confirmHelper}
                                        />
                                        {/* {!userDetails.isValidConfirm && <p className="error-message">Confirm password is not valid</p>} */}
                                    </div>
                                </div>
                            </div>

                            <p id="passpara">Use 8 or more characters with a mix of letters, numbers & symbols</p>
                            <div className="check">
                                <FormControlLabel id="check" control={<Checkbox Checked={userDetails.isShowPassword} onChange={handleShow} />} label="Show Password" />
                            </div>

                            <div className="buttondiv">
                                <Link to="/" id="link3">Sign In instead</Link> {/* Use Link */}
                                <Button id="button" variant="contained" type="submit" onClick={handleSubmit}>Register</Button>
                            </div>
                        </div>
                        {userDetails.isSubmitted && <p id="submit">Registered successfully!</p>}
                    </form>
                </div>
                <div className="right">
                    <img src={LoginImg} id="img1" alt="login" />
                </div>
            </div>
        </div>
    );

}
export default SignupForm;
