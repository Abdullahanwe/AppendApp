import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import About from '../About/About';
import Home from '../Home/Home';
import ScrollToTopButton from '../ScrollTopButton/ScrollTopButton';

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className=" w-full overflow-hidden min-h-screen mx-auto jus justify-center justify-items-center flex flex-col">
                <Outlet>
                    <About />
                    <Home />
                </Outlet>
                <ScrollToTopButton />

            </div>

            <Footer />
        </>
    );
}

export default Layout;
