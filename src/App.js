import "./App.css";
import Navbar from "./components/Navbar";
import TextBox from './components/TextBox';
import React, {useState} from 'react';


function App() {
   const [mode, setMode] = useState('light')
   

   const handleToggle = () => {
     if(mode === 'dark'){
       setMode('light')
       document.body.style.backgroundColor = 'white'
       document.body.style.color = 'black'
     }
     else{
       setMode('dark')
       document.body.style.backgroundColor = 'black'
       document.body.style.color = 'white'
     }
   }
  return (
    <>
      <Navbar title="TextUtils" themeMode={mode} toggle={handleToggle} />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
           <TextBox heading="Enter Text In The Box Bellow" themeMode={mode} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
