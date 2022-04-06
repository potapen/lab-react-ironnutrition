// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd'
import { useState } from 'react'
import foods from '../foods.json'

// Iteration 5
function Search({foodState, setFoodState}) {
    const [searchState, setSearchState] = useState('')
    const searchFood = (event) =>{
        const {value} = event.target
        if(value===''){
            setFoodState(foods)
            setSearchState(value)
        }
        else{
            setSearchState(value)
            const foodRegex = new RegExp(value,'i')
            const foodsArray = foodState
            const matchingFoodsArray = foodsArray.filter(food => foodRegex.test(food.name))
            setFoodState(matchingFoodsArray)    
        }
    }
  return (
    <>
      <Divider>Search</Divider>
      <label htmlFor='search'>Search</label>
      <Input value={searchState} type="text" id='search' onChange={searchFood} />
    </>
  )
}

export default Search
