// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
function App() {
  return (
  <div>
    <Navbar  title="Paliyal Tech" aboutText="About Paliyals"/>
    <div className='container my-3'>
    <TextForms heading='Enter Text to Analys Below'/>
    </div>
    {/* <Navbar/> */}
  </div>
  );
}

export default App;
