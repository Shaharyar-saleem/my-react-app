import React from 'react';

export default function Alert(props) {
    const alertBox = {
        width: '61%',
        margin: '0 auto',
    }
  return (
    props.alertBox && <div className={`alert alert-${props.alertBox.type} alert-dismissible fade show mt-4`} role="alert" style={alertBox}>
   <strong>{props.alertBox.type}!</strong> {props.alertBox.msg}
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
  );
}
