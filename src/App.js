// src/App.js
import './App.css'
import foods from './foods.json'
import { useState } from 'react'
import FoodBox from './components/FoodBox'
import AddFoodForm from './components/AddFoodForm'
import Search from './components/Search'

function App() {
  const [foodState, setFoodState] = useState(foods)

  return(
    <div className="App">Hello
      <Search foodState={foodState} setFoodState={setFoodState}/>
      <AddFoodForm foodState={foodState} setFoodState={setFoodState}/>
      {
        foodState.map( food =>{
          return(
            <FoodBox key={food.name} food={food} foodState={foodState} setFoodState={setFoodState}/>
          )
        })
      }

  </div>
)}
export default App