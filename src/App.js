// import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Hello there</h3>
        <Weather city="Tokyo" />
      </header>
    </div>
  );
}

export default App;
