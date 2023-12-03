import {useState} from "react";
import '../App.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        if (username === 'Admin' && password === '12345') {
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = '/profile';
        } else {
            setErrorMessage('Username or password entered is incorrect');
        }
    };

    return (
        <div className="login">
            <h1>Login</h1>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <label>Username:</label>
            <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
            <label>Password:</label>
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export {Login}