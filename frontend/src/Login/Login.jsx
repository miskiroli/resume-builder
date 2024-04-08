import React, { useState } from 'react';
import axios from 'axios';
const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const handleLogin = async ()=>{
        try{
            const respone = await axios.post('http://localhost:8000/api/login', {email,password});
            console.log(respone.data);
        }catch(error){
            setError(error.respone.data.message);
        }
    };

    return (
        <div>
           <h2>Login</h2>
           <input type="email" placeholder='Email' value={email} onChange={(e) =>setEmail(e.target.value) }/>
           <input type="password" placeholder='Password' value={password} onChange={(e) =>setPassword(e.target.value) }/>
           {error && <p>{error}</p> }
           <button onClick={handleLogin}>Login</button>


        
        </div>
    );
}

export default Login;
