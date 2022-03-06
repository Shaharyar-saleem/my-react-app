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
           <TextBox heading="Enter Text In The Box Bellow" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
