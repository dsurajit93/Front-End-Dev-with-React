import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MealCard from './MealCard';

function Meals() {
    let [meals, setMeals] = useState([])

    async function getData(){
        try{
            let response = await axios.get("http://themealdb.com/api/json/v1/1/search.php?f=a")
            console.log(response.data.meals);
            setMeals(response.data.meals)
        } catch(error){
            console.log(error)
        }
    }
    // getData()
    useEffect(()=>{
        getData()
    }, [])
  return (
    <div className='container my-3'>
        <h1 className='text-center'>Cloud Kitchen</h1>
        <div className="row">
            <div className="col mx-auto">
                {
                    meals.map((meal) => (
                        <MealCard meal={meal} key={meal.idMeal} />
                    ))
                }
            </div>
        </div>
      
    </div>
  )
}

export default Meals
