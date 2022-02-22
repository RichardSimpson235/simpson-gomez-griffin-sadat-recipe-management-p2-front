import React, { useState } from "react";

export default function Instructions({ instructions }) {

   const instructionsList = instructions.map(
       inst => <div key={inst.step}>
           <h4>{inst.step}</h4>
           <p>{inst.text}</p>
       
       </div>
   );
   
    return(
        
        <div className="container" >
            <h1 style={{textAlign: 'center'}}>
                Instructions
            </h1>
            <ul>
                {(instructions.length === 0) ? <><div><i>No Instructions</i></div></> : instructionsList}
            </ul>

        </div>       
    );
}