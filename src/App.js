import "./App.css";
import Navbar from "./components/Navbar";
import TextBox from './components/TextBox';
import React, {useState} from 'react';
import Alert from "./components/Alert";

function App() {
   const [mode, setMode] = useState('light')
   

   const handleToggle = () => {
     if(mode === 'dark'){
       setMode('light')
       document.body.style.backgroundColor = 'white'
       document.body.style.color = 'black'
       createAlert("Light mode has been enabled successfully", "success")
     }
     else{
       setMode('dark')
       document.body.style.backgroundColor = 'black'
       document.body.style.color = 'white'
       createAlert("Dark mode has been enabled successfully", "success")
     }
   }

   const [alert, setAlert] = useState(null);

   const createAlert = (message, typ) => {
        setAlert({
          msg: message,
          type: typ,
        })
        setTimeout(() => {
          setAlert(null)
        }, 1500);
   }
  return (
    <>
      <Navbar title="TextUtils" themeMode={mode} toggle={handleToggle} />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
           <TextBox heading="Enter Text In The Box Bellow" themeMode={mode} alert={createAlert} />
          </div>
        </div>
      </div>
      <Alert alertBox={alert} />
    </>
  );
}

export default App;
