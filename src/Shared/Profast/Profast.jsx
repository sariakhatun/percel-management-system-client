import React from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router';
const Profast = () => {
    return (
       <Link to='/'>
         <div>
            <div className="flex gap-0 items-end">
         <img src={logo} alt="" className="mb-2 lg:mb-3 w-8 h-8"/>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold -ml-4">ProFast</h1>
         </div>
        </div>
       </Link>
    );
};

export default Profast;