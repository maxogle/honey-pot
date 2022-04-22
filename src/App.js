import './App.css';
import HomePage from "./components/HomePage"
import React, { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "App-dark" : "App"}>
      
      <HomePage darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  );
}

export default App;
