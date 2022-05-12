import { useEffect, useState } from 'react';
import './App.scss';
import Benefits from './Components/Benefits';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Mockups from './Components/Mockups';
import Search from './Components/Search'
import VideoSection from './Components/VideoSection';

function App() {
  const [ils, setIls] = useState(0)

  useEffect(() => {
    const options = {
      method: 'GET',
      "headers": { 'Content-Type': 'application/json' }
    }
    fetch('/getIls', options)
      .then(res => {
        res.json()
        console.log('asads - ', res)
      })
      .then(data => {
        console.log("Saved new ILS")
        setIls(data.ils)
      })
  }, [])

  if(ils == 0) 
    return(
      <>
        <div className="header"></div>
          <div className="loader__container">
              <div className="loader"></div>
          </div> 
          <div className='footer'>כל הזכויות שמורות 2022</div>
      </>
    )
  return (
    <>
      <div className="header"></div>
      <Header />
      <Hero />
      <Mockups />
      <VideoSection />
      <Benefits />
      <Search ils={ ils } />  
      <div className='footer'>כל הזכויות שמורות 2022</div>
    </>
  );
}

export default App;