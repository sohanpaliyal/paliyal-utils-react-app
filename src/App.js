// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
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
  const toggleMode = ()=>{
    mode === 'dark' ? setMode('light'):setMode('dark');
    mode === 'dark' ? document.body.style.background = 'white':document.body.style.background = '#042743';
    mode === 'dark' ? initAlert('dark mode has been disabled','success') :initAlert('dark mode has been enabled','warning')
  }

  return (
  <div>
    <Navbar  title="Paliyal Tech" aboutText="About Paliyals" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
    <TextForms heading='Enter Text to Analys Below'  mode={mode} initAlert={initAlert}/>
    {/* <About/> */}
    </div>
    {/* <Navbar/> */}
  </div>
  );
}

export default App;
