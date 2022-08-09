index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FirstComponent from './firstComponent';
import SecondComponent from './secondComponent';
import ThirdComponent from './thirdComponent';
import FourthComponent from './fourthComponent';
import FifthComponent from './fifthComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirstComponent message={"FirstComponent"} />
    <SecondComponent message ={"SecondComponent"} /> 
    <ThirdComponent message={"ThirdComponent"} />
    <FourthComponent message={"FourthComponent"}/>
    <FifthComponent message={"FifthComponent"} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


firstComponent.js :

function FirstComponent({message})
{
    return (
        <div>{message}
        </div>
    )
}
export default FirstComponent


secondComponent.js :

import FirstComponent from "./firstComponent"
function SecondComponent({message})
{
    return (
        <div>    
        <FirstComponent message="FirstComponent" />
        {message}
        </div>
    )
}
export default SecondComponent


thirdComponent.js :

import SecondComponent from "./secondComponent"
function ThirdComponent({message})
{
    return (
        <div>
            <SecondComponent message={"SecondComponent"} />
            {message}</div>
    )
}
export default ThirdComponent


fourthComponent.js :

import ThirdComponent from "./thirdComponent"
function FourthComponent({message})
{
    return (
        <div>
            <ThirdComponent message={"ThirdComponent"} />
            {message}</div>
    )
}
export default FourthComponent


fifthComponent.js :

import FourthComponent from "./fourthComponent"
function FifthComponent({message})
{
    return (
        <div>
            <FourthComponent message={"FourthComponent"} />
            {message}</div>
    )
}
export default FifthComponent


/* Output :
FirstComponent
FirstComponent
SecondComponent
FirstComponent
SecondComponent
ThirdComponent
FirstComponent
SecondComponent
ThirdComponent
FourthComponent
FirstComponent
SecondComponent
ThirdComponent
FourthComponent
FifthComponent */
