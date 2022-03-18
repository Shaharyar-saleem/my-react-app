import React from 'react'

export default function Contact(props) {
  return (
    <div className="container" style={{paddingTop: '70px'}}>
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <h2>Contact Us</h2>
                <form>
  <div className="mb-3 mt-4">
      <div className="row">
      <div className="col-md-6">
           <input type="text" placeholder="Enter Your Name" className={`form-control bg-${props.themeMode}`} />
       </div>
       <div className="col-md-6">
        <input type="email" className={`form-control bg-${props.themeMode}`} placeholder="Your Email Address" />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
       </div>
      </div>
      <div className="row mt-2">
          <div className="col-md-12">
              <input type="text" className={`form-control bg-${props.themeMode}`} placeholder="Subject"/>
          </div>
      </div>
  </div>
  <div className="mb-3">
    <label className="form-label">Message</label>
    <textarea type="text" className={`form-control bg-${props.themeMode}`} placeholder="Enter Your Message here" rows="7">
    </textarea>
  </div>
  <button type="submit" className={`btn btn-${props.themeMode === 'light' ? 'outline-primary' : props.themeMode} btn-block`} style={{width: '100%'}}>Submit</button>
</form>
            </div>
            <div className="col-md-3"></div>
        </div>
    </div>
  )
}
