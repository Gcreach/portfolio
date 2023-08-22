import React from 'react';
import Nav from '../Navigation';
import './style.css'
import headerImg from '../../assets/cover/cover-image.jpg';

const Header = ({pages, currentPage, setCurrentPage}) => {
    return (
        <header className='container-fluid'>
            <img src={headerImg} alt='server' className='cover-image' />
            <div className='container d-lg-flex justify-content-lg-between'>
                <h1 className='text-left'>
                    Grant Creach
                </h1>
                <Nav
                    pages={pages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div> 
        </header>
    );
};

export default Header;