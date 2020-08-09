
import React from 'react';


const person = (props) => 
{
   return (
   
<div>
   <p onClick={props.click}>I m {props.name} 
     <input onChange = {props.nameChange}>
     </input>
   
   </p>
   <p>{props.children}</p>
</div>
   )
};

export default person;
