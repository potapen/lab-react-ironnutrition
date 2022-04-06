// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd'
import { useState } from 'react'


// Iteration 4
function AddFoodForm({foodState, setFoodState}) {
    const [localFoodState, setLocalFoodState] = useState({
        name: "food",
        calories: 100,
        image: "https://i.imgur.com/abKGOcv.jpg",
        servings: 1
        })
    const updateField = (event) =>{
        const {id,value} = event.target
        const foodCopy = {...localFoodState}
        foodCopy[id] = value
        setLocalFoodState(foodCopy)
    }
    const submitCreate = (event) => {
        event.preventDefault()
        const foodsArray = [...foodState]
        foodsArray.push(localFoodState)
        setFoodState(foodsArray)

    }
  return (
    <form onSubmit={submitCreate}>
      <Divider>Add Food Entry</Divider>

      <label htmlFor="Name">Name</label>
      <Input value={localFoodState.name} type="text" id="Name" onChange={(event) => {
          const foodCopy = {...localFoodState}
          foodCopy.name = event.target.value
          setLocalFoodState(foodCopy)
          }} />

      <label htmlFor="image">Image</label>
      {/* render antd <Input /> type="text" here */}
      <Input value={localFoodState.image} type="text" id="image" onChange={updateField} />

      <label htmlFor="calories">Calories</label>
      {/* render antd <Input /> type="number" here */}
      <Input value={localFoodState.calories} type="Number" id="calories" onChange={updateField} />

      <label htmlFor="servings">Servings</label>
      {/* render antd <Input /> type="number" here */}
      <Input value={localFoodState.servings} type="Number" id="servings" onChange={updateField} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
