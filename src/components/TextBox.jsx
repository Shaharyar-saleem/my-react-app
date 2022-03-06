import React, {useState} from 'react';
import propTypes from 'prop-types';


export default function TextBox(props) {
  const [text, setText] = useState("Type your text here")
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
        return index === 0 ? text.toLowerCase() : text.toUpperCase()
      })
      setText(camelcaseTxt)
      console.log("camelcase:", camelcaseTxt)
  }
//   const copyToClipboard = (event) => {
//       console.log(this.state.textToCopy)
//       navigator.clipboard.writeText(event.target.value)
//   }
  const updateTextValue = (event) => {
      setText(event.target.value)
  }
  return (
    <div>
      <div className="mb-3">
          <h1 className='my-4'>{props.heading}</h1>
          <textarea className="form-control mb-3" value={text} onChange={updateTextValue} rows="10"></textarea>
          <button className="btn btn-primary btn-lg mr-4" onClick={convertToUpperCase}>Convert to Uppercase</button>
          <button className="btn btn-success btn-lg mx-3" onClick={convertToLowerCase}>Convert to Lowercase</button>
          <button className="btn btn-secondary btn-lg mx-2" onClick={convertToCamelCase}>Convert to CamelCase</button>
          <button className="btn btn-danger btn-lg mx-2" onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}>Copy the Text</button>
       </div>
    </div>
  );
}

TextBox.propTypes = {
    heading: propTypes.string.isRequired
}
