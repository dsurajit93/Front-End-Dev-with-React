import React from 'react'

function MealCard(prop) {
    console.log(prop);
    let meal  = prop.meal
    console.log(meal)
    
  return (
    <div className='card rounded-0 my-2'>
        <div className="card-body">
            <div className="row">
                <div className="col-md-4">
                    <img src={meal.strMealThumb} alt="" className='img-fluid h-100'/>
                </div>
                <div className="col-md-8">
                    <h4 className='mb-0'>{meal.strMeal}</h4>
                    <span className='text-muted'>{meal.strCategory}</span>
                    <p>{meal.strInstructions}</p>
                    <span>Ingredients: {meal.strIngredient1},{meal.strIngredient2},{meal.strIngredient3},{meal.strIngredient4} etc</span>
                    <br /><br />
                    <a href={meal.strYoutube} className='btn btn-sm btn-danger' target='_blank'>Watch Demo</a>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default MealCard
