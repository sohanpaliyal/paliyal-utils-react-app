// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';

// able to use this app.import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  // global state for dark mode
  const [mode, setMode] = useState('light')
  
  const [alert, setAlert] = useState(null)

  const initAlert = (msg,type)=>{
    setAlert({
      msg,
      type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = (cls)=>{
    console.log(cls);
    document.body.classList.remove('bg-primary','bg-success','bg-danger','bg-warning','bg-dark','bg-light')
    document.body.classList.add('bg-'+cls);
    // cls === 'light'? mode = 'dark':mode = 'light';
    setMode(cls);
    document.body.style.background = cls;
    initAlert(cls +`dark mode has been disabled`,'success');
}

  return (
    <Router>
  <div>
    <Navbar  title="Paliyal Tech" aboutText="About Paliyals" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>

    {/* <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/">
             <TextForms heading='Enter Text to Analys Below'  mode={mode} initAlert={initAlert}/>
          </Route>

    </Switch> */}


    <Routes>
        <Route exact path="/" element={             
        <TextForms exact heading='Enter Text to Analys Below'  mode={mode} initAlert={initAlert}/>
} />
        <Route path="about/*" element={<About mode={mode}/>} />
      </Routes>
      
    {/* <About/> */}
    </div>
    {/* <Navbar/> */}
  </div>
  </Router>
  );
}

export default App;
