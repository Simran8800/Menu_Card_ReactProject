// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



import React from "react";
import './App.css';
import { useState } from 'react';
const _ = require('lodash')
function App() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [allData, setAllData] = useState([])
  const [searchData, setSearchbar] = useState("")
  const [filterData, setFilterdata] = useState([])

  const searchfun = () => {
    console.log("hiii")
    if (searchData.length >3) {
      console.log("Entered the filter function")
      let filterData = _.filter(allData, { "firstName": searchData })
      setFilterdata(filterData)
      console.log(filterData)
    }
  }

  return (
    
    <div>
      <table>

      <div>
        <input id="data1" type="text" placeholder="Search..." onChange={(e) => {
          setSearchbar(e.target.value)
          searchfun()
        }} />
      </div>
      <input id="data" type="text" placeholder="firstName" onChange={(e) => {
        setFirstName(e.target.value)
      }} />
      <input id="data2" type="text" placeholder="lastName" onChange={(e) => {
        setLastName(e.target.value)
      }} />
      <input id="data3" type="email" placeholder="email" onChange={(e) => {
        setEmail(e.target.value)
      }} />
      <input id="data4" type="password" placeholder="password" onChange={(e) => {
        setPassword(e.target.value)
      }} />
      <button onClick={() => {
        let tempObj = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password
        }
        console.log(tempObj)

        setAllData([...allData, tempObj])
        console.log(allData)
      }}>Submit</button>
      {
        searchData.length > 3 ? filterData.map((item, index) => {
          return (
            <div>
              {/* <table> */}
                <tr >
                  <td >{item.firstName}</td>
                  <td >{item.lastName}</td>
                  <td >{item.email}</td>
                  <td >{item.password}</td>
                </tr>
              {/* </table> */}
            </div>
          )
        }) : allData.map((item, index) => {
          return (
            <div>
              {/* <table> */}
              
                <tr >
                <center>
                <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td></center>
                    </tr>
                {/* </table> */}
            </div>
          )
        })
      }
      </table>
    </div>
  )
}

export default App




