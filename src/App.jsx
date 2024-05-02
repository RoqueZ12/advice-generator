import React, { useEffect, useState } from 'react';
import { Quote } from './componentes/Quote';
import './App.css';
import icon from './assets/icon-dice.svg';
import { userQuote } from './hook/userQuote';
import line from './assets/pattern-divider-desktop.svg';

function App() {
  const { apis, isLoading, error, fetchData } = userQuote();
  const [buttonClick, setButtonClick] = useState(0)
  
  useEffect(()=>{
    fetchData()
  },[buttonClick])

  const handleQuote = () => {
    setButtonClick(buttonClick + 1)
  };

  return (
    <div className='container'>
      {error ? (
        <p>Error: {error.message}</p>
      ) : (
        <Quote apis={apis} isLoading={isLoading} />
      )}
      <div className='container-line'>
        <img className='line' src={line} alt="line"/>
      </div>
      <div className='container-img' onClick={handleQuote}>
        <img className='icon' src={icon}  alt="icon" />
      </div>
    </div>
  );
}

export default App;
