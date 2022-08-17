index.js

import React from 'react';
import ReactDOM from 'react-dom';
import Table from './table';

ReactDOM.render(<Table />, document.getElementById("root") )


table.jsx

import "./tableDesign.css"
function Table()
{
    return(
        <div>
         <h1>Table </h1>
        <div className="table-design">
                <table>
                    <thead>
                    <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Reg.No</th>
                    <th>Gender</th>
                    <th>Profile</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Jeyaroshini</td>
                    <td>913119205015</td>
                    <td>Female</td>
                    <td><img src="https://m.media-amazon.com/images/I/31Cd9UQp6eL._SX355_.jpg" alt=""  height="50px" width="70px" alt="" /></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jeyasree</td>
                    <td>913119205016</td>
                    <td>Female</td>
                    <td><img src="https://m.media-amazon.com/images/I/31Cd9UQp6eL._SX355_.jpg" alt="" height="50px" width="70px" /></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Madhu Varshni</td>
                    <td>913119205017</td>
                    <td>Female</td>
                    <td><img src="https://m.media-amazon.com/images/I/31Cd9UQp6eL._SX355_.jpg" alt="" height="50px" width="70px" /></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Surya Kumar</td>
                    <td>913119205018</td>
                    <td>Male</td>
                    <td><img src="https://m.media-amazon.com/images/I/41jLBhDISxL._SY355_.jpg" alt="" height="50px" width="70px" /></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Harshivan</td>
                    <td>913119205019</td>
                    <td>Male</td>
                    <td><img src="https://m.media-amazon.com/images/I/41jLBhDISxL._SY355_.jpg" alt="" height="50px" width="70px" /></td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Hamshine</td>
                    <td>913119205020</td>
                    <td>Female</td>
                    <td><img src="https://m.media-amazon.com/images/I/31Cd9UQp6eL._SX355_.jpg" alt="" height="50px" width="70px" /></td>
                </tr>
                </tbody>
                </table>
        </div>
        </div>
    )
}
export default Table


tableDesign.css

.table-design {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 1rem;
  }
  
  table {
    border-collapse: collapse;
    width: 100%;
  }
  
  th,
  td {
    border: 1px solid #ffffff;
    text-align: left;
    padding: 8px;
    font-size: 20px;
  }
  
  th {
    background-color: rgb(219, 48, 76);
  }
  
  td {
    background-color: pink;
  }
  table.image-container
  {
    max-width: 10px;
height: 10px;
  }

h1{
text-align: center;
}