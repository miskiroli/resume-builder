import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async (event) => {
    event.preventDefault(); 

    try {
        const response = await axios.post('http://localhost:8000/api/register', { name, email, password });
        console.log(response.data);
    } catch (error) {
        setError(error.response.data.message);
    }
};

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                {error && <p>{error}</p>}
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
