import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    background: '#0055a5',
    padding: '0.75rem 0',
    color: '#fff',
    fontWeight: 'bold',
};

const footerStyle = {
    background: '#003366',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem 0',
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
};

const rbacNav = {
    admin: [
        { label: 'Welcome', path: '/welcome' },
        { label: 'Register User', path: '/register' },
        { label: 'Profile', path: '/profile' },
        { label: 'Settings', path: '/settings' }
    ],
    co: [
        { label: 'Welcome', path: '/welcome' },
        { label: 'Register User', path: '/register' },
        { label: 'Profile', path: '/profile' },
        { label: 'Settings', path: '/settings' }
    ],
    ro: [
        { label: 'Welcome', path: '/welcome' },
        { label: 'Register User', path: '/register' },
        { label: 'Profile', path: '/profile' }
    ],
    go: [
        { label: 'Welcome', path: '/welcome' },
        { label: 'Profile', path: '/profile' }
    ],
    do: [
        { label: 'Welcome', path: '/welcome' },
        { label: 'Profile', path: '/profile' }
    ],
    officer: [
        { label: 'Welcome', path: '/welcome' },
        { label: 'Profile', path: '/profile' }
    ],
    sailor: [
        { label: 'Welcome', path: '/welcome' },
        { label: 'Profile', path: '/profile' }
    ]
};

const PrivateLayout = ({ children }) => {
    const { handleLogout, user } = useAuth();
    console.log(user)
    const navigate = useNavigate();

    const onLogout = (e) => {
        e.preventDefault();
        handleLogout();
        navigate('/login');
    };
    
    const role = user?.role || 'sailor';
   
    const navLinks = rbacNav[role] || rbacNav['sailor'];

    return (
        <div style={{ minHeight: '100vh', minWidth:'100%', background: '#f7f9fa', display: 'flex', flexDirection: 'column' }}>
            <header style={{ background: '#003366', color: '#fff', padding: '1rem 0', textAlign: 'center' }}>
                <h2>My App Dashboard</h2>
            </header>
            <nav style={navStyle}>
                {navLinks.map(link => (
                    <a key={link.path} href={link.path} style={{ color: '#fff', textDecoration: 'none' }}>{link.label}</a>
                ))}
                <button onClick={onLogout} style={{ background: 'none', border: 'none', color: '#fff', textDecoration: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: 'inherit', padding: 0 }}>Logout</button>
            </nav>
            <main style={{ flex: 1, padding: '2rem 0' }}>
                {children}
            </main>
            <footer style={footerStyle}>
                &copy; {new Date().getFullYear()} My App. All rights reserved.
            </footer>
        </div>
    );
};

export default PrivateLayout;
