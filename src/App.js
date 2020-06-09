import React from 'react';
import './bioData.css';

function App({inprogress,completed}) {
  return <div className = "biodata" > <br/> <br/> <strong> <center> <h1> CERTIFICATION </h1> </center>  </strong> 
  <div> <strong> <center> Inprogress : {inprogress} <br/>
        Completed  : {completed}  </center> </strong>  </div>  </div>
  
}

export default App;
