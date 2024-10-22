import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem('isLoggedIn') === 'true';
    });
    useEffect(() => {
        const storedLoginStatus = localStorage.getItem('isLoggedIn');
        if (storedLoginStatus === 'true') {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.setItem('isLoggedIn', 'false');
        window.location.reload();
    };

    return (
        <div className='navcon w-full'>
            <div className='mainbox w-full bg-zinc-300 flex flex-row items-center justify-between px-8 py-4'>
                <Link to="/"><div className=''>
                    ZCC Fund Transfer App
                </div></Link>
                <div className='flex flex-row gap-8'>
                    <Link to="/"><div className="nav__link">
                        Home
                    </div></Link>
                    {isLoggedIn ? (
                        <>
                            <Link to="/Dashboard"><div className="nav__link">
                                Dashboard
                            </div></Link>
                            <Link to="/User"><div className="nav__link">
                                Create Employee
                            </div></Link>
                            <Link to="/User"><div className="nav__link">
                                History
                            </div></Link>
                            <div className="nav__link">
                                <button onClick={handleLogout} className="text-red-600">
                                    Logout
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <Link to="/Login"><div className="nav__link">
                                Login
                            </div></Link>
                            <Link to="/Signup"><div className="nav__link">
                                SignUp
                            </div></Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
