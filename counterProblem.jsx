index.js :

import React from 'react';
import ReactDOM from 'react-dom/client';
import CounterProblem from './counterProblem';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterProblem counterProblem={""} />
       </React.StrictMode>
);


counterProblem.jsx :

import React ,{useState} from "react"
import "./space.css"
function CounterProblem({CounterProblem})
{
    const [count,setCount] = useState(0)
    return (
        <div className="space">{CounterProblem}
        <div>
       <h1 className="h1">Counter Problem</h1>
        <h2>{count}</h2> 
      <button className="button-one" type="button" onClick={()=> setCount(count+1)} >Increment</button> 
     <button className="button-two" type="button" onClick={()=> setCount(count-1)} disabled= {count === 0}>Decrement</button>
     </div>
        </div>
        
        
    )

    
}
export default CounterProblem


space.css :

.space{
    text-align: center;
    
}

h1{
    font-family: 'Times New Roman', Times, serif;
}

.button-one
{
    margin-right: 20px;
    background-color: lightblue;
    color: black;
    border-radius: 10px;
    
}
.button-two
{
  margin-right: 4px;
  background-color: yellow;
  color: black;
  border-radius: 10px;
}


