import './styles/App.css';
import Header from './components/Header';
import HomePage from './components/pages/HomePage';
import React, {useState} from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState(<HomePage/>);
  
  return (
    <div className="App">
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {currentPage}
    </div>
  );
}

export default App;
