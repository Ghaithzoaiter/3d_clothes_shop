// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Canvas from './canvas/index.jsx';
// import Customizer from './pages/Customizer';
// import Home from './pages/Home';


// function App() {


//   return (
//       <main className="app transiton-allease-in">
//       <Home/>
//       <Canvas/>
//       <Customizer/>
     
//       </main>
//   )
// }

// export default App


import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}

export default App