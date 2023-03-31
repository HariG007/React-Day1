import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <header className='App-header'>
    <h1>
      Let we see the output of JAVASCRIPT
    </h1>
    <button onClick={window['alertMsg']}>Click Me to Call The Func</button>

   </header>
  );
}

export default App;
