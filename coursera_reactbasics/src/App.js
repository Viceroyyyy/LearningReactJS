
import './App.css';
import Header from './Header';
import Fruit from './Fruit';
import Logo from './Logo';
import ModeToggler from './ModeToggler';
import React from "react";
import Fruits from "./Fruits";
import FruitsCounter from "./FruitsCounter";
import { Routes,Route,Link } from 'react-router-dom';
import AudioAsset from './AudioAsset';
import Calculator from './Calculator';
function App() {
//To change anything in body change it directly in the index.css file
  // let title = "Welcome to React";
  const [fruits] = React.useState([
    {fruitName: 'apple', id: 1},
    {fruitName: 'apple', id: 2},
{ fruitName: 'plum', id: 3 },
    {fruitName: 'apple', id: 1},
    {fruitName: 'apple', id: 2},
{ fruitName: 'plum', id: 3 },
    
]);

const style = {
  "display": "flex",
  "justifyContent": "space-evenly",
  "alignItems" : "Stretch" ,
  "padding" : "10px",
  "color" : "aliceblue"
}
  return (
    <div>
      <nav style={style}>
      <Link to="/">Logo</Link>
      <Link to="/header">Header</Link>
      <Link to="/mode-toggler">ModeToggler</Link>      
      <Link to="/fruits">Fruits</Link>      
      <Link to="/video-asset">Audios</Link>      
      <Link to="/calculator">Calculator</Link>      
      </nav>
      <Routes>
        <Route path="/" element={<Logo/>}/>
        <Route path="/header" element={<Header children={<Fruit name="Bananas" qty = "12" />}/>}/>
        <Route path="/mode-toggler" element={<ModeToggler />}/>
        <Route path="/fruits"
         element={<div className="App">
          <h1>Where should the state go?</h1>
          <Fruits fruits={fruits}/>
          <FruitsCounter fruits={fruits}/>
          </div>}/>
          <Route path="/video-asset" element={<AudioAsset />}/>
          <Route path="/calculator" element={<Calculator />}/>
      </Routes>

      {/* <h1>{title}</h1> */}
    
    {/* <Logo />
    <ModeToggler /> */}
    </div>
    
  );
}

export default App;
