import './App.css';
import axios from 'axios';
function App() {

  const myStyle = {
    width: "500px",
    marginTop: "200px",
  }
return (
  <div className="App">
    <div id="quote-box" className="card block mx-auto bg-primary bg-gradient" style={myStyle}>
      <span id="text">laksj</span>
      <span id="author">asdf</span>
      <button id="new-quote" className="btn btn-success">New Quote</button>
      <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank" rel="noreferrer">Send your own message <i className="lab la-twitter"></i></a>
    </div>
  </div >
);
}

export default App;
