
import React from 'react';


const person = (props) => 
{
   return (
   
<div>
   <p onClick={props.click}>I m {props.name} </p>
   <p>{props.children}</p>
</div>
   )
};

export default person;
