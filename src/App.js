// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
function App() {
  // global state for dark mode
  const [mode, setMode] = useState('light')
  
  const toggleMode = ()=>{
    mode === 'dark' ? setMode('light'):setMode('dark');
    mode === 'dark' ? document.body.style.background = 'white':document.body.style.background = 'gray';
  }

  return (
  <div>
    <Navbar  title="Paliyal Tech" aboutText="About Paliyals" mode={mode} toggleMode={toggleMode}/>
    <div className='container my-3'>
    <TextForms heading='Enter Text to Analys Below'  mode={mode}/>
    {/* <About/> */}
    </div>
    {/* <Navbar/> */}
  </div>
  );
}

export default App;
