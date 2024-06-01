import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import WorkHistory from "./components/WorkHistory";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <WorkHistory/>
    </div>
  );
}

export default App;
