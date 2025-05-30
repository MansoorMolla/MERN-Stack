import axios from 'axios';
import React, { useState } from 'react';

function LoginFormuseState() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Form Data - Username: ${userName}, Password: ${password}`);
    };

    return (
        <form onSubmit={handleSubmit} >
            <label>
                Username:
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default LoginFormuseState;
