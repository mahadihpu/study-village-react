import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Sidebar from '../Shared/Sidebar/Sidebar';


const Home = () => {
    return (
        <>
            <Navbar />
            <div class="main-root">
                <Sidebar />
            </div>
        </>
    );
};

export default Home;