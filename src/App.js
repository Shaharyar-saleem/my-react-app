import "./App.css";
import Navbar from "./components/Navbar";
import TextBox from './components/TextBox';
import React, {useState} from 'react';
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from "./components/About";

function App() {

  const [mode, setMode] = useState('')
   
  const setCookie = (name,value,days) => {
    let expires = ""
    if (days) {
     let date = new Date();
     date.setTime(date.getTime() + (days*24*60*60*1000));
     expires = "; expires=" + date.toUTCString();
   }
     document.cookie = name + "=" + (value || "")  + expires + "; path=/";
     console.log("cookie value:", value)
  }


  function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

  window.onload = function () {
    if(document.cookie){
      let cookie = getCookie("mode")
      setMode(cookie)
      console.log(cookie)
      if(cookie === "dark"){
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
      }
      else if(cookie === "secondary"){
        document.body.style.backgroundColor = '#808080d1'
        document.body.style.color = 'black'
      }

      else{
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
      }
    }
    else{
      setMode('light')
    }
  }

   const handleToggle = () => {

     if(mode === 'dark'){
       setMode('light')
       document.body.style.backgroundColor = 'white'
       document.body.style.color = 'black'
       createAlert("Light mode has been enabled successfully", "success")
       setCookie("mode", "light", 30)
       document.title = 'LightMode - Enabled'
     }
     else{
       setMode('dark')
       document.body.style.backgroundColor = 'black'
       document.body.style.color = 'white'
       createAlert("Dark mode has been enabled successfully", "success")
       setCookie("mode", "dark", 30)
       document.title = 'DarkMode - Enabled'
     }
   }

   const handleSecondaryToggle = () => {
    if(mode === 'light'){
      console.log("if is working here")
      setMode('secondary')
      document.body.style.backgroundColor = '#808080d1'
      document.body.style.color = 'black'
      createAlert("Secondary mode has been enabled", "success")
      setCookie("mode", "secondary", 30)
      document.title = 'SecondaryMode - Enabled'
    }
    else{
      console.log("else is working here")
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      createAlert("Light mode has been enabled", "success")
      setCookie("mode", "light", 30)
      document.title = 'LightMode - Enabled'
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
    <Router>
      <Navbar title="TextUtils" themeMode={mode} toggle={handleToggle} toggleSecondary={handleSecondaryToggle} />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Routes>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/" element={<TextBox heading="Enter Text In The Box Bellow" themeMode={mode} alert={createAlert} />}></Route>
            </Routes>
          </div>
        </div>
      </div>
      <Alert alertBox={alert} />
    </Router>
  );
}

export default App;
