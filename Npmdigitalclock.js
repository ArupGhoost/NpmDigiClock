import React from 'react'
import Clock from 'react-digital-clock'
import './Npmdigitalclock.css'


function Npmdigitalclock() { 
    return (
        <>
        <div style={{color:'red'}}>
        <h1 >
           <Clock /></h1>
         </div>
         <p>Like material Ui we can get 
         Direct digital time  through 'import' without writing more code</p>
         <p>first - npm install react-digital-clock </p>
         <p>check if present in package.json</p>
         <p>Then import it</p>
      </>
    );
        
    
}

export default Npmdigitalclock
