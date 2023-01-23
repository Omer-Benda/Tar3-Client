import React from 'react'
import { useState } from 'react';
import FCIngredient from './FCIngredient';

export default function FCRecipe(props) {

    const [isShown, setIsShown] = useState(false);

    const handleclick=()=>{
      setIsShown(current => !current);       
    }
  return (
    
    <div className='recipe'>
            <img src={props.image} style={{width:300, height:250}}></img>
            <p>Name: {props.name}</p>
            <p>Cooking Method: {props.cookingmethod}</p>
            <p>Cooking Time: {props.cookingtime}</p>

            <button onClick={handleclick}>Show Ingredients</button>

            <div style={{display: isShown ? 'block' : 'none'}}>            
            {props.ingList.map((ing)=>{    
              return(        
          <FCIngredient 
          key={ing.id} 
          name={ing.name}
          image={ing.image}
          calories={ing.calories}
          id={ing.id}
          />
              )
           })}
       </div>
        </div>
  )
}
