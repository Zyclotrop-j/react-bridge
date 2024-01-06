import logo from './logo.svg';
import './App.css';
import { useEffect, useReducer } from 'react';

function App() {
  const [state, increase] = useReducer((a) => a + 1, 0);
  useEffect(() => {
    const interval = setInterval(() => {
      increase()
    }, 500);
    return () => {
      clearInterval(interval);
    }
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {state}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
