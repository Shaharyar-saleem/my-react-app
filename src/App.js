import "./App.css";
import Navbar from "./components/Navbar";
import TextBox from './components/TextBox';
import React, {useState} from 'react';
import Alert from "./components/Alert";

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
        console.log("mode is dark")
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
      }
      else{
        console.log("mode is light")
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
     }
     else{
       setMode('dark')
       document.body.style.backgroundColor = 'black'
       document.body.style.color = 'white'
       createAlert("Dark mode has been enabled successfully", "success")
       setCookie("mode", "dark", 30)
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
