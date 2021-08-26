import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Sidebar from '../Shared/Sidebar/Sidebar';
import Home__Content from './Home__Content';


const Home = () => {
    return (
        <>
            <Navbar />
            <div class="main-root">
                <Sidebar />
                <Home__Content />
            </div>
        </>
    );
};

export default Home;