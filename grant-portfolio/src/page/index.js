import React from "react";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import About from "./About";
import './style.css';

const Page = ({currentPage}) => {

    const renderPage = (page) => {
        switch (page) {
            case 'portfolio':
                return <Portfolio />;
            case 'contact':
                return <Contact />;
            case 'resume':
                 return <Resume />;
            default: return <About />;
        }
    }
    return <section className="container">
        <h2 className="mb-4">{currentPage}</h2>
        {renderPage(currentPage)}
        </section>;
};

export default Page;