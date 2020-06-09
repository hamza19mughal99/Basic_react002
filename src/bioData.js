import React from 'react';
import "./bioData.css"

function BioData({Name,age,qualification}) {
  return <div className = "biodata" > <center> <strong> <h1> BIO DATA </h1>   <br/>
                Name : {Name}  <br/> 
                Age  : {age}  <br/>
                Qualification : {qualification} </strong> </center> </div>
  
}

export default BioData;