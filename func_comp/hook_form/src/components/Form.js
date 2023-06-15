import React, {useState} from 'react';

const Form = (props) => {
    const [fname, setFname] = useState("");
    const [fnameError, setFnameError] = useState("");
    const [lname, setLname] = useState("");
    const [lnameError, setLnameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passError, setPassError] = useState("");
    const [confirm, setConfirm] = useState("");
    const [confirmError, setConfirmError] = useState("");
    const checkFname = (e) => {
        setFname(e.target.value);
        if(e.target.value.length < 1) {
            setFnameError("");
        }
        else if(e.target.value.length >= 1) {
            if(e.target.value.length < 2) {
                setFnameError("First name must be at least two characters");
            }
            else {
                setFnameError("");
            }
        }
    };
    const checkLname = (e) => {
        setLname(e.target.value);
        if(e.target.value.length < 1) {
            setLnameError("");
        }
        else if(e.target.value.length >= 1) {
            if(e.target.value.length < 2) {
                setLnameError("Last name must be at least two characters");
            }
            else {
                setLnameError("");
            }
        }
    };
    const checkEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("");
        }
        else if(e.target.value.length >= 1) {
            if(e.target.value.length < 5) {
                setEmailError("Email must be at least five characters");
            }
            else {
                setEmailError("");
            }
        }
    };
    const checkPassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPassError("");
        }
        else if(e.target.value.length >= 1) {
            if(e.target.value.length < 8) {
                setPassError("Password must be at least eight characters");
            }
            else {
                setPassError("");
            }
        }
    };
    const checkConfirm = (e) => {
        setConfirm(e.target.value);
        if(e.target.value.length < 1) {
            setConfirmError("");
        }
        else if(e.target.value.length >= 1) {
            if(e.target.value != password) {
                setConfirmError("Passwords must match");
            }
            else {
                setConfirmError("");
            }
        }
    };
    return (
        <div>
            <form onSubmit={ (e) => e.preventDefault() }> 
                <label for="fname">First Name: </label>
                <input type="text" name="fname" value={fname} onChange={ checkFname }/>
                <label for="lname">Last Name: </label>
                <input type="text" name="lname" value={lname} onChange={ checkLname } />
                <label for="email">Email: </label>
                <input type="text" name="email" value={email} onChange={ checkEmail } />
                <label for="password">Password: </label>
                <input type="password" name="password" value={password} onChange={ checkPassword } />
                <label for="confirm">Confirm Password: </label>
                <input type="password" name="confirm" value={confirm} onChange={ checkConfirm } />
                <input type="submit" />
            </form>
            <div>
                <h3>Your Form Data:</h3>
                <p>First Name: {fname}</p>
                    { fnameError ? <p>{fnameError}</p> : "" }
                <p>Last Name: {lname}</p>
                    { lnameError ? <p>{lnameError}</p> : "" }
                <p>Email: {email}</p>
                    { emailError ? <p>{emailError}</p> : "" }
                <p>Password: {password}</p>
                    { passError ? <p>{passError}</p> : "" }
                <p>Confirm Password: {confirm}</p>
                    { confirmError ? <p>{confirmError}</p> : "" }
            </div>
        </div>
    );
}

export default Form;