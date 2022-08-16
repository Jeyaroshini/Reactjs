index.js

import React from 'react';
import ReactDOM from 'react-dom';
import StudentMark from './studentMark';

ReactDOM.render(<StudentMark />, document.getElementById("root") )


studentMark.jsx

import React from "react";
import "./design.css"
class StudentMark extends React.Component{
    constructor ()
    {
        super();
        this.state={english:'',tamil:'',maths:'',science:'',social:'',total:''}
    }
    handleEnglish = (event)=>
    {
        this.setState(
            {
                english:event.target.value
            }
        )
    }
    handleTamil = (event) =>
    {
        this.setState({
            tamil:event.target.value
        })
    }
    handleMaths = (event) =>
    {
        this.setState({
            maths:event.target.value
        })
    }
    handleScience = (event) =>
    {
        this.setState({
            science:event.target.value
        })
    }
    handleSocial = (event) =>
    {
        this.setState({
            social:event.target.value
        })
    }
    execute = (event) =>
    {
        this.setState({total: parseInt(this.state.english) + parseInt(this.state.tamil) + parseInt(this.state.maths) + parseInt(this.state.science) + parseInt(this.state.social)})
        event.prevent.default();
    }
    
    render()
    {
        return(
            <div className="overview">
                <h1>Total Of Five Subjects</h1>
                
                <form onSubmit={this.execute}>
                <div>
                   <b> English :</b><br />
                    <input type="text"  value={this.state.num1} onChange={this.handleEnglish}/>
                </div>
                <div><b>Tamil :</b><br />
                    <input type="text" value={this.state.num2} onChange={this.handleTamil}/>
                </div>
                <div><b>Mathematics :</b><br />
                    <input type="text"  value={this.state.num1} onChange={this.handleMaths}/>
                </div>
                <div><b>Science :</b><br />
                    <input type="text"  value={this.state.num1} onChange={this.handleScience}/>
                </div>
                <div><b>Social Science :</b><br />
                    <input type="text"  value={this.state.num1} onChange={this.handleSocial}/>
                </div>
                <div><br />
                    <button type="submit" className="button-info"><b>Total</b></button>
                </div>
                </form>
               <div><br /><b><i>Total:</i></b>
                <input type={"text"} value= {this.state.total}></input>
               </div>
            </div>
        )
    }
} 
export default StudentMark


design.css

h1{
    font-family: Georgia, 'Times New Roman', Times, serif;
}
.overview
{
  text-align: center;
  
}
input{
    border-radius: 10px;
    
}
.button-info
{
    border-radius: 10px;
    background-color: lightpink;
}