import React from 'react';
import { Form } from 'react-router-dom';
import { useState } from 'react';

export default function FCNewIngredients() 
{

  const [nametxt,setNameTxt]=useState('')
  const [imageTxt, setImageTxt] = useState('')
  const [caloriesTxt,setCaloriesTxt]=useState('')
  const [counter,setCounter]=useState(6)
    const AddNewIngredient=()=>
    {
      alert(nametxt)
      {setCounter(prevC=>prevC+1)}
      alert (counter)
      const apiUrl='https://localhost:44358/api/ingredients'
      fetch(apiUrl, 
        {
        method: 'POST',
        body: JSON.stringify({
          id:counter,
          name:nametxt,
          image:imageTxt,
          calories:caloriesTxt

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
        console.log(result.Name);
        },
        (error) => {
        console.log("error post");
        });
    
      }
      
  return (
    <div className='col-sm-12'>
    <h1>Create New Ingredient</h1>
    <br/>
    <br/>
    Name:
    <input type="text" value={nametxt} name="name" onChange={(e)=>{setNameTxt(e.target.value)}}/>
    <br/>
    <br/>
    Image:
    <input type="text" value={imageTxt} name="image" onChange={(e)=> {setImageTxt(e.target.value)}} />
   <br/>
   <br/>
    Calories:
    <input type="text" value={caloriesTxt} name="calories" onChange={(e)=>{setCaloriesTxt(e.target.value)} }/>
    <br/>
    <br/>
    <button onClick={AddNewIngredient}>Add New Ingredient</button>

    </div>
  )
}

// const IngredientForm = (props) => {
  //     const [name,setName] = useState('');
  //     const [image,setImage] = useState('');
  //     const [calories,setCalories] = useState('');
  
  //     const validateInputs=()=>{
  //         if (name==='' || image ==='' || calories === '') {
  //             alert("missing some values, please fill the entire form.");
  //         }
  //         else{
  //             addIngredient();
  //         }
  //     }
  //     const addIngredient = ()=>{
  //         //post to server, using firebase firestore db for that
  //         firestore().collection("ingredients").add({
  //             name: name,
  //             image: image,
  //             calories: calories
  //         })
  //         .then(docRef=> {
  //             console.log("Document written with ID: ", docRef.id);
  //             alert("Ingredient succesfuly added to db")
  //         })
  //         .catch(error=> {
  //             console.error("Error adding document: ", error);
  //         });
  //     }
  //     const clearForm=()=>{
  //         setName('');
  //         setImage('');
  //         setCalories('');
  //     }
  
  //     return (  
  //         <Row>
  //             <Col xs="2"></Col>
  //             <Col>
  //                 <TextInput value={name} label="name" placeholder="enter ingredient name" changedText={(e)=>setName(e.target.value)}/>
  //                 <TextInput value={image} label="image" placeholder="enter image url" changedText={(e)=>setImage(e.target.value)}/>
  //                 <NumberInput value={calories} label="calorires" placeholder="enter dish calories" changedNumber={(e)=>setCalories(parseInt(e.target.value))}/>
  //                 <FormButtons btnText="Create new ingredient" cancel={clearForm} submit={validateInputs} />
  //             </Col>
  //             <Col xs="2"></Col>
  //         </Row>
  //     );