import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import About from '../About/About';
import Home from '../Home/Home';

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className=" w-full min-h-screen mx-auto jus justify-center justify-items-center flex flex-col">
                <Outlet>
                    <About />   
                    <Home/>
                </Outlet>
            </div>

            <Footer />
        </>
    );
}

export default Layout;
