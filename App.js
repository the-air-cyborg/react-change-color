import React, { useState } from 'react';
import './App.css';

function App(){
  const[color,setColor]=useState("black");
  const[index,setindex]=useState(0);

  const changeColor=()=>{
    const colors=['black','pink','red'];
    const newcolor=colors[index];
    setColor(newcolor);
    setindex((prevIndex)=>(prevIndex+1)%colors.length);
  };
  return(
    <div>
      <h1>Change Paragraph</h1>
      <p style={{color:color}}>
        Click the button to change the color</p>
      <button onClick={changeColor}>Change color</button>
    </div>
  );
}
export default App;