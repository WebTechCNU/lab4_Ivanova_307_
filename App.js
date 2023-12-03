import { Routes, Route } from "react-router-dom";
import { Home } from './components/home';
import { News } from './components/news';
import { Profile } from './components/profile';
import { Login } from './components/login';

function App() {
    return (
        <>
            <header>
                <a href="/">Home</a>
                <a href="/news">News</a>
                <a href="/profile">Profile</a>
                <a href="/login">Login</a>
            </header>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/news" element={<News/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </>
    );
}

export default App;