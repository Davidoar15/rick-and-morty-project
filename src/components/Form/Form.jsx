import React from "react";
import { useState } from "react";
import validateForm from "./validate";

export default function Form({login}) {

    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    function handleChange(event) {
        const {name, value} = event.target;
        setUserData({
            ...userData,
            [name]: value,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = validateForm(userData.email, userData.password);
        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            login(userData);
            alert("Data Completed");
            setUserData({email: '', password: ''});
            setErrors({});
        } else {
            alert("Data is Incompleted. All fields must be filled");
        }
    }

    return (
        <div>
            <h2>Let's Fun, Berp!</h2>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input name='email' value={userData.email} placeholder='example@gmail.com' type='email' onChange={handleChange}></input>
                {errors.email && <p className="error">{errors.email}</p>}
                <hr />
                <label>Password:</label>
                <input name='password' value={userData.password} placeholder='********' type='password' onChange={handleChange}></input>
                {errors.password && <p className="error">{errors.password}</p>}
                <hr />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}