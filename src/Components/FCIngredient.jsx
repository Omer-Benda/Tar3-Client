import React from 'react'
import { useState } from 'react';

export default function FCIngredient(props)
 {
  // const [c,setC]=useState(false)
  // setC((e)=>(alert(e.target.dataset.pid)))
  return (
    <div >
      {/* <input type="checkbox" data-pid={props.id} onClick={(e)=>{setC(alert(e.target.dataset.pid))}}/> */}
      <br />
        <img src={props.image} style={{width:300, height:250}}></img>
        <p>Name: {props.name}</p>
        <p>Calories: {props.calories}</p>
    </div>
  )
}
