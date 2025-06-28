import React from 'react';
import { Outlet } from 'react-router';
import Home from '../Pages/Home/Home';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer';

const RootLayout = () => {
    return (
        <div>
           <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;