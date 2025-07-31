import { useState } from 'react'
import './App.css'
import ModelViewer from './components/ModelViewer.jsx';
import NavBar from './components/NavBar.jsx';

function App() {

  return (
    <div>
      <NavBar />
      <ModelViewer />
    </div>
  );
}

export default App;