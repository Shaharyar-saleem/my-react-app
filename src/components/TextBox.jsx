import React, {useState} from 'react';
import propTypes from 'prop-types';


export default function TextBox(props) {
  const [text, setText] = useState("")
  const convertToUpperCase = () => {
    let enteredText = text
    let upperText = enteredText.toUpperCase()
    setText(upperText)
  }
  const convertToLowerCase = () => {
      let lowercaseTxt = text.toLowerCase()
      setText(lowercaseTxt)
  }
  const convertToCamelCase = () => {
       let camelcaseTxt = text.replace(/(?:^\w|[A-Z]|\b\w)/g, function(text, index) {
        return index === true ? text.toLowerCase() : text.toUpperCase()
      })
      setText(camelcaseTxt)
  }
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text)
    alert("Text Copied")
  }
  const clearText = () => {
    const confirm = window.confirm("Are you sure to remove the text?")
    console.log(confirm)
    confirm ? setText("") : setText(text)
  }
  const updateTextValue = (event) => {
      setText(event.target.value)
  }

  // styling
  const [themeStyle, setThemeStyle] = useState({
    backgroundColor: 'white',
    color: 'black',
  })
  const [btnTxt, setBtnTxt] = useState("Enable Dark Mode")

  const toggleStyle = ()=> {
     if(themeStyle.backgroundColor == "white") {
       setThemeStyle({
         backgroundColor: "black",
         color: "white",
       })
       setBtnTxt("Enable Light Mode")
     }

     else{
       setThemeStyle({
         backgroundColor: "white",
         color: "black",
       })
       setBtnTxt("Enable Dark Mode")
     }
  }
  return (
      <>
      <button className="btn btn-md btn-success float-right mt-3 mb-3" onClick={toggleStyle}>{btnTxt}</button>
    <div className='container py-5' style={themeStyle}>
      <div className="mb-3">
          <h1 className='my-4'>{props.heading}</h1>
          <textarea className="form-control mb-3" style={themeStyle} value={text} onChange={updateTextValue} rows="10"></textarea>
          <button className="btn btn-primary btn-lg mr-4" onClick={convertToUpperCase}>Convert to UpperCase</button>
          <button className="btn btn-success btn-lg mx-3" onClick={convertToLowerCase}>Convert to LowerCase</button>
          <button className="btn btn-secondary btn-lg mx-2" onClick={convertToCamelCase}>Convert to CamelCase</button>
          <button className="btn btn-success btn-lg mx-2" onClick={copyToClipboard}>Copy Text</button>
          <button className="btn btn-danger btn-lg mx-2" onClick={clearText}>Clear Text</button>
       </div>
    </div>
    <div className="container py-4" style={themeStyle}>
        <h2>Your Text Summary</h2>
        <div className="p-2">
        <p><b>{text.split(' ').length}</b> <i>Words</i> AND <b>{text.length}</b>  <i>Characters</i></p>
        <p><b>{0.0032 * text.split(' ').length}</b> Minutes to read this text.</p>
        </div>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}


TextBox.propTypes = {
    heading: propTypes.string.isRequired
}
