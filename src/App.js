import './App.css';
import { useEffect, useState } from 'react';
import video from './book.mp4';


function App() {

  const [myAdvice, setMyAdvice] = useState('');

  useEffect(() => {
    getAdvice();
    }, [])

  const getAdvice = async () => {
    const response = await fetch (`http://www.boredapi.com/api/activity/`);
    const data = await response.json();
    setMyAdvice(data.activity);
    }

  return (
    <div className="App">

  <div className="container">
  <video autoPlay muted loop>
    <source src={video} type="video/mp4"/>
  </video>
  <h1>Tips for fighting boredom</h1>
  </div>

  <div className='container'>
    <p>{myAdvice}</p>
  </div>
  
  <div className='container'>
  <button onClick={getAdvice}>New Tip</button>
  </div>
  </div>
  );
}

export default App;
