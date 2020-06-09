import React from 'react';
import "./bioData.css"

function MediaCard({title,body,img}) {
  return <div className = "media" > <center> <strong> <h1> {title} </h1>   <br/>
                Body : {body}    </strong> </center> </div>
  
}

export default MediaCard;