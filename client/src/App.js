import { useEffect, useState } from 'react';
import './App.scss';
import Search from './Components/Search'

function App() {
  const [ils, setIls] = useState(0)

  useEffect(() => {
    const options = {
      method: 'GET',
      "headers": { 'Content-Type': 'application/json' }
    }
    fetch('/getIls', options)
      .then(res => res.json())
      .then(data => {
        console.log("Saved new ILS")
        setIls(data.ils)
      })
  }, [])

  return (
    <>
      <div className="header"></div>
      <Search ils={ ils } />  
      <div className='footer'>
        כל הזכויות שמורות 2022
      </div>
    </>
  );
}

export default App;