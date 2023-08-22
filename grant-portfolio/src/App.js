import React, {useState} from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Page from './page';

const pages = ['about', 'portfolio', 'contact', 'resume']

function App() {
  const [currentPage, setCurrentPage] = useState('about')
  return (
   <div className="wrapper">
    <Header pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    <main>
      <Page currentPage={currentPage}/>
    </main>
    <Footer />
   </div>
   
  );
}

export default App;
