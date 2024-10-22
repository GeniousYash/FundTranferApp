import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // To redirect user after login

    // Handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form refresh

        if (username === '' || password === '') {
            setErrorMessage('Please fill in both fields');
        } else {
            // Retrieve users from localStorage (fetch stored users during signup)
            const users = JSON.parse(localStorage.getItem('users')) || [];

            // Check if the user exists and if the password matches
            const userExists = users.find(
                (user) => user.username === username && user.password === password
            );

            if (userExists) {
                setErrorMessage(''); // Clear any error messages

                // Set login state to true in the parent component (Navbar)
                setIsLoggedIn(true);

                // Store login status in localStorage to persist across refreshes
                localStorage.setItem('isLoggedIn', 'true');

                // Redirect the user to the Dashboard
                navigate('/Dashboard');
                window.location.reload();
            } else {
                // Display an error if the username or password is incorrect
                setErrorMessage('Invalid username or password');
            }
        }
    };

    return (
        <div className="login-container" style={styles.container}>
            <h2 className='text-center text-3xl'>Login</h2>
            {errorMessage && <p style={styles.error}>{errorMessage}</p>}
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={styles.input}
                        placeholder="Enter your username"
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={styles.input}
                        placeholder="Enter your password"
                    />
                </div>
                <button type="submit" style={styles.button}>Login</button>
            </form>
            <div><p>Don't have an Account? Go to <Link to="/Signup"><span className='text-blue-700'>SignUp Page</span></Link></p></div>
        </div>
    );
};

// Inline styles
const styles = {
    container: {
        maxWidth: '400px',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    formGroup: {
        marginBottom: '15px',
    },
    input: {
        padding: '10px',
        fontSize: '16px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        width: '100%',
        boxSizing: 'border-box',
    },
    button: {
        padding: '10px',
        backgroundColor: '#007BFF',
        color: '#fff',
        fontSize: '16px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    error: {
        color: 'red',
        marginBottom: '10px',
    },
};

export default Login;
