import { useEffect, useState } from 'react';
import './App.scss';
import Search from './Components/Search'

function App() {
  const [ils, setIls] = useState(0)

  useEffect(() => {
    fetch('/getIls')
      .then(res => res.json())
      .then(data => {
        setIls(data.ils)
      })
  }, [])

  return (
    <>
      <div className="header">
      </div>
      <Search ils={ ils } />  
      <div className='footer'>
        כל הזכויות שמורות 2022
      </div>
    </>
  );
}

export default App;