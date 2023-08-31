import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Form = () => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPass] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('FirstName : ', firstname);
        console.log('LastName : ', lastname);
        console.log('Email : ', email);
        console.log('ConfirmPass: ', confirmpassword);
        console.log('Password: ', password);
        setSubmitted(true);
    };
    return (
        <div className="container">
            <h2>Create Your FunDooNoteApp Account</h2>
            <form className="form" onSubmit={handleSubmit}>
                <div className="registerform">
                    <div className="name">
                        <div className="firstname">
                            <TextField id="firstname" label="First name" variant="outlined" value={firstname}
                                onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className="lastname">
                            <TextField id="lastname" label="Last name" variant="outlined" value={lastname}
                                onChange={(e) => setLastName(e.target.value)} />
                        </div>
                    </div>
                    <div className="email">
                        <TextField id="email" label="email" variant="outlined" value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="pass">
                        <div className="password">
                            <TextField id="password" type="password" label="password" variant="outlined" value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="confirmpass">
                            <TextField id="confirmpass" type="password" label="confirm" variant="outlined" value={confirmpassword}
                                onChange={(e) => setConfirmPass(e.target.value)} />
                        </div>
                    </div>

                </div>

                <Button variant="contained" type="submit" >Submit</Button>
                {submitted && <p>Form submitted successfully!</p>}

            </form>
        </div>

    );
}

export default Form
