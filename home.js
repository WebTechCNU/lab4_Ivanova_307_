import React from 'react';
import '../App.css';

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome!</h1>
            <p>Explore our services and discover amazing features.</p>

            <div className="feature">
                <h2>Featured Service</h2>
                <p>Discover our latest and most popular service that will meet your needs.</p>
            </div>

            <div className="call-to-action">
                <p>Ready to get started? Sign in to your account or create a new one.</p>
                <button onClick={() => window.location.href = '/login'}>Login</button>
            </div>
        </div>
    );
};

export { Home };
