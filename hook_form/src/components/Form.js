import React, {useState} from 'react';

const Form = (props) => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { fname, lname, email, password, confirm };
        setFname("");
        setLname("");
        setEmail("");
        setPassword("");
        setConfirm("");
    };
    return (
        <div>
            <form onSubmit={createUser}>
                <label for="fname">First Name: </label>
                <input type="text" name="fname" value={fname} onChange={ (e) => setFname(e.target.value) }/>
                <label for="lname">Last Name: </label>
                <input type="text" name="lname" value={lname} onChange={ (e) => setLname(e.target.value) } />
                <label for="email">Email: </label>
                <input type="text" name="email" value={email} onChange={ (e) => setEmail(e.target.value) } />
                <label for="password">Password: </label>
                <input type="password" name="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
                <label for="confirm">Confirm Password: </label>
                <input type="password" name="confirm" value={confirm} onChange={ (e) => setConfirm(e.target.value) } />
                <input type="submit" />
            </form>
            <div>
                <h3>Your Form Data:</h3>
                <p>First Name: {fname}</p>
                <p>Last Name: {lname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirm}</p>
            </div>
        </div>
    );
}

export default Form;