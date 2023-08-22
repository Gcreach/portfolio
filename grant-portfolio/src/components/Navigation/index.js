import React from 'react';
import './style.css';


const Nav = ({pages, currentPage, setCurrentPage}) => {
    console.log(pages);
    return <nav className='nav text-light mb-4 display-flex align-center'>
        {pages.map(page => (
            <a href='/#' key={page}
             className={`nav-link ${page === currentPage && 'active'}`}
             onClick={() => setCurrentPage(page)}>{page}</a>
        ))}
    </nav>
};

export default Nav;