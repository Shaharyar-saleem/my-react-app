import React, {useState} from 'react';
import propTypes from 'prop-types';


export default function TextBox(props) {
  const [text, setText] = useState("Type your text here")
  const convertToUpperCase = () => {
    let enteredText = text
    let upperText = enteredText.toUpperCase()
    setText(upperText)
  }
  const updateTextValue = (event) => {
      setText(event.target.value)
  }
  return (
    <div>
      <div className="mb-3">
          <h1 className='my-4'>{props.heading}</h1>
          <textarea className="form-control" value={text} onChange={updateTextValue} rows="10"></textarea>
          <button className="btn btn-primary btn-lg mt-4" onClick={convertToUpperCase}>Convert to Uppercase</button>
       </div>
    </div>
  );
}

TextBox.propTypes = {
    heading: propTypes.string.isRequired
}
