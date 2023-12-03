import React from 'react';
import '../App.css';

const Profile = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (!isLoggedIn) {
        window.location.href = '/login';
        return <></>;
    }

    return (
        <div className="profile">
            <h1>Profile</h1>
            <p>Welcome to your profile page. Here you can view and manage your personal information.</p>

            <div className="profile-details">
                <h2>User Information</h2>
                <p><strong>Name:</strong> Admin</p>
                <p><strong>Email:</strong> admin@gmail.com</p>
            </div>
        </div>
    );
};

export { Profile };
