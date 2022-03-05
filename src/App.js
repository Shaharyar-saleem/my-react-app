import "./App.css";
import Navbar from "./components/Navbar";
import TextBox from './components/TextBox';

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
           <TextBox heading="Enter Text in this box for Anylyse" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
