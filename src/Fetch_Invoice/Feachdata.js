import React from 'react';
import { useState ,useEffect} from 'react';
import './Fetch.css'

function Fetchdata1() {

    const[allproduct,setAllproduct]=useState([])
    
    const[allsearch,setAllSearch]=useState(" ")
    
    const[allAdd,setAllAdd]=useState([])
    console.log(allAdd)

    var data=async()=>{
    let response=await fetch('https://themealdb.com/api/json/v1/1/search.php?s')
    let result= await response.json()
    setAllproduct(result.meals)
    console.log(result);
}
const searchbar=!allsearch? allproduct:allproduct.filter((item)=>
item.strMeal.toLowerCase().includes(allsearch.toLowerCase()))
useEffect(()=>{
  data()
},[])
  return(
   <div id='upper'>
    <img id='logo' src="https://cdn2.stylecraze.com/wp-content/uploads/2019/07/Healthy-Food-in-Hindi.jpg"></img>
    <input id='search' type="text" placeholder='Search for Meal...' value={allsearch} onChange={(e)=>{setAllSearch(e.target.value)}}/>
    <h1 id='meal'>TheMealDB</h1>
    {/* <input id='search' type="text" placeholder='Search for Meal...'></input> */}
   <center><h1 id='welcome' >Welcome to TheMealDB</h1>
    <h4>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.</h4>
    <h4>We also offer a free JSON API for anyone wanting to use it, with additional features for subscribers.</h4>
    <button id='pay'>Pay to subscribers</button>
    <h4>Click to Support $2 per month (cancel anytime)</h4>
    <h4>Currently 50 supporters</h4>
    <h1 id='line'>________________________________________________________________________________________</h1>
    <input id='search1' type="text" placeholder='Search for Meal...' value={allsearch} onChange={(e)=>{setAllSearch(e.target.value)}}/>

    <h1 id='line'>________________________________________________________________________________________</h1></center>
    <div id='main'>{
      
      searchbar.map((item,index)=>{
       
          return(
            <div  key={index}>  
      
           
            <img id="picture" src={item.strMealThumb}></img>
            <h3>{item.strMeal}</h3>
            <h3>$ 500</h3>
            <h3>Country: {item.strArea}</h3>

            <button onClick={() => {
            let tempObj = {
              // structuredClone:item.strMealThumb,
              strMeal:item.strMeal,
              "Price":"$500",
              
              }
            // console.log(tempObj)
            setAllAdd([...allAdd ,tempObj])
            // console.log(allAdd)
            }}>Add to Card</button>

             </div>
             )
        })
    }
</div>
<h2 id='rec'>RECEIPT</h2>
    {
      allAdd.map((item,index)=>{
        return(
          <div >
        
            <table >
          
              <td id='Item'>Item :</td><td id='col'>{item.strMeal}</td> <td id='Item'>Price:</td> <td id='col'>{item.Price}</td>
            </table>
            </div>
        )
      })
    }
    <table>
    <div>
      
      <tr id='Item'>TOTAL :{allAdd.length*500}</tr>
    </div>
    </table>
  
  </div>
  
  )
}
export default Fetchdata1