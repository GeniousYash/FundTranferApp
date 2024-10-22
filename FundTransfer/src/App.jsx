import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from "./Componants/Navbar";
import Home from "./Pages/Home"
import Dashboard from "./Pages/Dashboard";
import User from "./Pages/User";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        // Check login state from localStorage on mount
        const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(loggedInStatus);
    }, []);
    return (
        <>
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Dashboard" element={isLoggedIn ? <Dashboard /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/User" element={isLoggedIn ? <User /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/SignUp" element={<Signup />} />
            </Routes>
        </>
    )
}

export default App
