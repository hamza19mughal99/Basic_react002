import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import BioData from './bioData';
import MediaCard from './MediaCard';

ReactDOM.render(
<div> <BioData
   Name = "Hamza Ahmed Mughal"
   age = {21} 
 qualification = "undergraduate Software Engineer " /> 

     <App 
      inprogress = "Web and Mobile Hybrid Application and  Full Stack Web Application "
      completed = "Project Management and Python Programming  "              
         />


     <MediaCard   
       title = "Media Card is title "
       body = " This is paragraph of mediaCard " />



  </div>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
