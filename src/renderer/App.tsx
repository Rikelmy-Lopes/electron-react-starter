import { useState } from 'react';
import electronLogo from './assets/electron.svg';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <a href="https://electronjs.org" target="_blank" rel="noreferrer">
                    <img src={electronLogo} className="logo electron" alt="Electron logo" />
                </a>
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1 >Electron + Vite + React = <span className='heart' >&#10084;</span></h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
                </button>
                <p>
          Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
        Click on the Electron, Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;
