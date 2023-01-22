import React from 'react'
import { useState } from 'react';
import FCIngredient from './FCIngredient';
import { ReactDOM } from 'react';

export default function FCCreateRecipe() {

  const [recepiesNameTxt,setNameTxt]=useState('')
  const [recepiesImageTxt, setImageTxt] = useState('')
  const [recepiesCookingMethodTxt,setCookingMethodTxt]=useState('')
  const [recepiesTimeTxt,setTimeTxt]=useState('')
  const [recepiesCounter,setRecepiesCounter]=useState(6)

  const [c,setC]=useState([])
  // e.target.checked
  const choosIng=(e)=>{
if (e.target.checked) {
  alert("yes")
  setC([...c,arr[e.target.dataset.pid]])
  alert(arr[e.target.dataset.pid].name)
}
else{
  alert("no")
  
  // alert(c.filter(c=>c.id==e.target.dataset.pid).name)
  // setC(prev=>c.filter(c=>c.id==e.target.dataset.pid).delete)
  // alert(setC(prev=>c.filter(c=>c.id==e.target.dataset.pid)))
  // alert(setC(prev=>prev.find(xx=>xx.id==e.target.dataset.pid)))
  // setC(prevC=>prevC.filter(x=>x.id==e.target.dataset.pid.name))
  // alert(setC(prevC=>prevC.filter(x=>x.id==e.target.dataset.pid.name)))
}

  }
  const AddNewRecipe=()=>
  {
// alert(ReactDOM.render(<FCCreateRecipe/>, document.getElementById("")))


    alert(recepiesNameTxt)
    {setRecepiesCounter(prevC=>prevC+1)}
    const apiUrl='https://localhost:44358/api/Recipe'
    fetch(apiUrl,
      {
      method: 'POST',
      body: JSON.stringify({
        id:recepiesCounter,
        name:recepiesNameTxt,
        image:recepiesImageTxt,
        cookingMethod:recepiesCookingMethodTxt,
        time:recepiesTimeTxt
      }
     ),
      headers: new Headers({
      'Content-type': 'application/json; charset=UTF-8' //very important to add the 'charset=UTF-8'!!!!
      })
      })
      .then(res => {
      console.log('res=', res);
      console.log("res status=", res.status)
      return res.json();
      })
      .then((result) => {
      console.log("fetch POST= ", result);
      console.log(result.name);
      },
      (error) => {
      console.log("error post");
      });

    }


    const [arr,changearr]=useState([]);
    const GetIngredients=()=>
    {
      const apiUrl='https://localhost:44358/api/ingredients'
      fetch(apiUrl,
        {
        method: 'GET',
        headers: new Headers({
          'Content-Type':'application/json; charset=UTF-8',
          'Accept':'application/json; charset=UTF-8',
          })

        })
      .then(res => {
      console.log('res=', res);
      return res.json()
      })
      .then(
      (result) => {
      changearr(result)

      },
      (error) => {
      console.log("err post=", error);
      });



    }

  return (

    <div className='col-sm-12' >
          <h1>Create New Recepies</h1>
          <br/>
          <br/>
    Name:
    <input type="text" value={recepiesNameTxt} name="name" onChange={(e)=>{setNameTxt(e.target.value)}}/>
    <br/>
    <br/>
    Image:
    <input type="text" value={recepiesImageTxt} name="image" onChange={(e)=> {setImageTxt(e.target.value)}} />
   <br/>
   <br/>
 Method:
    <input type="text" value={recepiesCookingMethodTxt} name="cookingMethod" onChange={(e)=>{setCookingMethodTxt(e.target.value)} }/>
    <br/>
    <br/>
    Time:
    <input type="text" value={recepiesTimeTxt} name="time" onChange={(e)=>{setTimeTxt(e.target.value)} }/>
    <br/>
    <br/>

    <button onClick={AddNewRecipe}>Create new Recipe</button>
    
    <button onClick={GetIngredients}>Show Ingredients</button>
    {arr.map((ing)=>
        {
          return(
            <div className='col-sm-12'>
        
            <FCIngredient 
            key={ing.id}
            name={ing.name}
            image={ing.image}
            calories={ing.calories}
            id={ing.id}
            />
            {/* <input type="checkbox"  data-pid={ing.id} onClick={(e)=>{setC(alert(e.target.dataset.pid))}}/> */}
            <input type="checkbox" data-pid={ing.id} onClick={choosIng}/>
            </div>
           
          )
        }
        )}

    </div>
  )
}
