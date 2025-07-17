import React, { useState } from 'react';
import ProfilePage from './ProfilePage'; 
import UserContext from './UserContext';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const userData = { name: "Tolulope Akinwale", email: "rebeccatolulope2@gmail.com" };
  const [count, setCount] = useState(0);

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage /> 

      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />

      <UserProfile 
        name="Tolulope" 
        age="22" 
        bio="Loves reading and photography" 
      />

      <div>
        <h1 style={{ textAlign: 'center' }}>My React App</h1>
        <Counter />
      </div>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </UserContext.Provider>
  );
}

export default App;
