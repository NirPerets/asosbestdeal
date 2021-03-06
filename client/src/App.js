import React, { useEffect, useState } from 'react';
import './App.scss';
import Benefits from './Components/Benefits';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Mockups from './Components/Mockups';
import Search from './Components/Search'
import VideoSection from './Components/VideoSection';
import ReactGA from 'react-ga'

function App() {
  const [ils, setIls] = useState()

  useEffect(() => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch('/getIls', options)
      .then(res => res.json())
      .then(data => {
        setIls(data.ils)
      })

      ReactGA.pageview(window.location.pathname);
  }, [])

  if(ils == null) 
    return(
      <>
        <div className="header"></div>
          <div className="loader__container">
              <div className="loader"></div>
          </div> 
          <div className='footer'></div>
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