import React, { useState } from "react";
import propTypes from "prop-types";

export default function TextBox(props) {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);

  const wordCounter = () => {
    const wordsArray = text.trim().split(/\s+/);
    let length = wordsArray.filter((word) => word !== "").length;
    setWordCount(length);
  };
  const convertToUpperCase = () => {
    let enteredText = text;
    let upperText = enteredText.toUpperCase();
    setText(upperText);
    props.alert("Converted to Uppercase", "success");
  };
  const convertToLowerCase = () => {
    let lowercaseTxt = text.toLowerCase();
    setText(lowercaseTxt);
    props.alert("Converted to Lowercase", "success");
  };
  const convertToCamelCase = () => {
    let camelcaseTxt = text.replace(
      /(?:^\w|[A-Z]|\b\w)/g,
      function (text, index) {
        return index === true ? text.toLowerCase() : text.toUpperCase();
      }
    );
    setText(camelcaseTxt);
    props.alert("Converted to Camelcase", "success");
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    props.alert("Text has Coppied to Clipboard", "success");
  };
  const clearText = () => {
    const confirm = window.confirm("Are you sure to remove the text?");
    confirm ? setText("") : setText(text);
    confirm
      ? props.alert("Text has Cleared", "success")
      : props.alert("Text has not been cleared", "warning");
  };
  const updateTextValue = (event) => {
    setText(event.target.value);
    wordCounter();
  };

  return (
    <>
      <div className="container py-5">
        <div className="mb-3">
          <h1 className="my-4">{props.heading}</h1>
          <textarea
            className={`form-control mb-3 bg-${props.themeMode}`}
            value={text}
            onChange={updateTextValue}
            style={{
              color: `${props.themeMode === "dark" ? "white" : "black"}`,
            }}
            rows="10"
          ></textarea>
          <button
            className={`btn btn-${
              props.themeMode === "light" ? "outline-primary" : props.themeMode
            } btn-lg mr-4`}
            onClick={convertToUpperCase}
            disabled={wordCount > 0 ? false : true}
          >
            Convert to UpperCase
          </button>
          <button
            className={`btn btn-${
              props.themeMode === "light" ? "outline-primary" : props.themeMode
            } btn-lg mx-2`}
            onClick={convertToLowerCase}
            disabled={wordCount > 0 ? false : true}
          >
            Convert to LowerCase
          </button>
          <button
            className={`btn btn-${
              props.themeMode === "light" ? "outline-primary" : props.themeMode
            } btn-lg mx-2`}
            onClick={convertToCamelCase}
            disabled={wordCount > 0 ? false : true}
          >
            Convert to CamelCase
          </button>
          <button
            className={`btn btn-${
              props.themeMode === "light" ? "outline-primary" : props.themeMode
            } btn-lg mx-2`}
            onClick={copyToClipboard}
            disabled={wordCount > 0 ? false : true}
          >
            Copy Text
          </button>
          <button
            className={`btn btn-${
              props.themeMode === "light" ? "outline-primary" : props.themeMode
            } btn-lg mx-2`}
            onClick={clearText}
            disabled={wordCount > 0 ? false : true}
          >
            Clear Text
          </button>
        </div>
      </div>
      <div className="container py-4">
        <h2>Your Text Summary</h2>
        <div className="p-2">
          <p>
            <b>{wordCount}</b> <i>Words</i> AND <b>{text.length}</b>{" "}
            <i>Characters</i>
          </p>
          <p>
            <b>{(0.0032 * text.split(" ").length).toFixed(2)}</b> Minutes to read this text.
          </p>
        </div>
        <h2>{text ? "Preview" : "Enter Text to preview"}</h2>
        <p style={{ fontSize: "20px" }}>{text}</p>
      </div>
    </>
  );
}

TextBox.propTypes = {
  heading: propTypes.string.isRequired,
};
