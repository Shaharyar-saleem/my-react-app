import React from "react";

export default function Alert(props) {
  const alertBox = {
    width: "22%",
    position: "absolute",
    right: "20px",
    bottom: "10px",
  };

  const captalize = (word) => {
    const lower = word.toUpperCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1).toLowerCase();
  };

  return (
    props.alertBox && (
      <div
        className={`alert alert-${props.alertBox.type} alert-dismissible fade show mt-4`}
        role="alert"
        style={alertBox}
      >
        <strong>{captalize(props.alertBox.type)}!</strong> {props.alertBox.msg}
      </div>
    )
  );
}
