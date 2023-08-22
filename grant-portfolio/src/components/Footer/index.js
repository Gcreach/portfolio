import React from 'react';
import './style.css'

const Footer = () => {
    return (
        <div className='w-90 text-dark p-5'>
            <div className='container text-center mb-5'>
            <h4>&copy; {new Date().getFullYear()} Grant Creach</h4>
            </div>
        </div>
    );
};

export default Footer;