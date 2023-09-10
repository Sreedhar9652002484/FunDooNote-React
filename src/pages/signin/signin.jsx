import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../signin/signin.css';
import { Link, useNavigate } from 'react-router-dom'; // Import Link
import axios from "axios";
import '../../Services/dataservice/userservices'
import { signin } from "../../Services/dataservice/userservices";



const SigninForm = () => {
    const [user, setUser] = useState({
        email: '',
        isvalidEmail: true,

        password: '',
        isvalidPass: true,

        isSubmitted: false
    });
    const [erroObj, setErrorOBJ] = useState({
        emailError: false,
        emailHelper: '',
        passError: false,
        passHelper: '',
    });

    const isEmailValid = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/;
    const isPassValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const handleEmail = (e) => {
        const newValue = e.target.value;
        setUser({ ...user, email: newValue, isvalidEmail: isEmailValid.test(newValue) });

        if (!user.isvalidEmail) {
            setErrorOBJ({ ...erroObj, emailError: true, emailHelper: "Email is not valid" })

        } else {
            setErrorOBJ({ ...erroObj, emailError: false, emailHelper: " " })
        }
    }

    const handlePassword = (e) => {
        const newValue = e.target.value;
        setUser({ ...user, password: newValue, isvalidPass: isPassValid.test(newValue) });

        if (!user.isvalidPass) {
            setErrorOBJ({ ...erroObj, passError: true, passHelper: "Password is not valid" })
        } else {
            setErrorOBJ({ ...erroObj, passError: false, passHelper: " " })
        }
    }


    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (user.isvalidEmail && user.isvalidPass) {
          setUser({ ...user, isSubmitted: true });
          console.log(user);
          let response = await signin(user);
          localStorage.setItem("token", response?.data.data);
          console.log(response);
          let mytoken=localStorage.getItem('token');
          if (mytoken!=null) {
          
            navigate("/dashboard");
          }
        }
    }

    return (
       <div className="main">
            <div className="container1">
                <div className="container2">
                    <div className="logo1">F<span className="U" >U</span><span className="N" >N</span><span className="D" >D</span><span className="O" >OO</span></div>
                    <div className="signin"> <p id="sign">Sign in</p>
                        <p id="google">with your Google Account</p></div>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="registerform1">
                            <div className="emailaddress">
                                <TextField id="email1" label="email" variant="outlined" required
                                    value={user.email}
                                    error={erroObj.emailError}
                                    helperText={erroObj.emailHelper}
                                    onChange={handleEmail} />

                            </div>
                            {/* {!user.isvalidEmail && <p className="error-message1">Email is not valid</p>} */}

                            <div className="pass">
                                <TextField id="password1" type="password" label="password" required variant="outlined"
                                    value={user.password}
                                    error={erroObj.passError}
                                    helperText={erroObj.passHelper}
                                    onChange={handlePassword} />

                            </div>
                            {/* {!user.isvalidPass && <p className="error-message1">Password is not valid</p>} */}

                            <a href="forget" id="link1">forget password?</a>

                            <div className="createsign">
                                <Link to="/signup" id="link2">Create Account</Link> {/* Use Link */}
                                <Button variant="Link" id="button1" type="submit"  >Sign in</Button>

                            </div>
                        </div>

                    </form>   {user.isSubmitted && <p id="submit1">Login successfully please wait....!</p>}
                </div>

            </div>
            </div>
        
    

    );
}

export default SigninForm;
