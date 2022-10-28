import Hero from "./components/Hero";
import Movies from "./components/Movies";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hero />
        <Movies />
      </header>
    </div>
  );
}

export default App;
