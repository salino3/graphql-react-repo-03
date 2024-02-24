import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hola</h1>
      <details>
        <summary>Home</summary>
        <div>
          <h2>Hola</h2>
        </div>
      </details>
    </div>
  );
}

export default App
