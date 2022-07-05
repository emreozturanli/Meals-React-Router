import { useParams } from 'react-router-dom';
import Error from './Error';

const Meal = ({ meals }) => {
  const { mealId } = useParams()
  const singleMeal = meals.find((meal) => meal.idMeal === mealId)
  if(!singleMeal){
    return <Error/>
  }
  const { strMeal, strCategory, strArea, strMealThumb, strInstructions } = singleMeal;
  return (
    <section className='single-meal'>
      <div className="title">
        <h1>{strMeal}</h1>
        <div className="sub-title">
          <p><span>Category</span> : {strCategory}</p>
          <p><span>Region</span> : {strArea}</p>
        </div>
      </div>
      <div className="main-container">
        <div className="single-image">
          <img src={strMealThumb} alt={strMeal} />
        </div>
        <div className="instructions">
          <p>{strInstructions}</p>
        </div>
      </div>
    </section>
  )
}

export default Meal