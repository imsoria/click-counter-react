import soriaLogo from './images/soria-logo.png';
import './App.css';
import Click from './components/Button.js';
import './Stylesheets/butonStyle.css';
import Counter from './components/counter';
import './Stylesheets/counter.css';
import { useState } from 'react';

function App() {
  
  const [numClicks, setNumClicks] = useState(0);
  const manageClick = () => {
    setNumClicks(numClicks + 1);
  }

  const restartCounter = ()=> {
    setNumClicks(0);
  }
  
  
  return (
    <div className="App">
      <div className='logo-container'>
        <img className='img-logo'
        src={soriaLogo}
        alt='Logo de soria'/>
      </div>

      <div className="main-container">

        <Counter numClicks={numClicks} />

        <Click
          text='Click'
          itsclickButton={true}
          manageClick={manageClick}/> 
          
        <Click
          text='Restart'
          itsclickButton={false}
          manageClick={restartCounter}/>
    
      </div>
    </div>
  );

  }
export default App;
