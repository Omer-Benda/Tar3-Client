import React from 'react'

export default function FCRecipe(props) {
  return (
    
    <div className='recipe'>
            <img src={props.image} style={{width:300, height:250}}></img>
            <p>Name: {props.name}</p>
            <p>Cooking Method: {props.cookingmethod}</p>
            <p>Cooking Time: {props.cookingtime}</p>
            <button >Show Ingredients</button>
        </div>
  )
}
