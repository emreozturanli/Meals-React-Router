import { useGlobalContext } from "../context";
import {Link} from 'react-router-dom';

const Home = ({ meals }) => {
    const { search, setSearch } = useGlobalContext()
    return (
        <main>
            <form >
                <input autoFocus type="search" value={search} onChange={(e) => setSearch(e.target.value)} />
            </form>
            {   
                meals ?
                 <article>
                
                    {meals.map((meal) => {
                        const { idMeal, strMeal, strArea, strMealThumb } = meal;
                        return <div key={idMeal} className="card">
                            <div className="card-img-container">
                                <img src={strMealThumb} alt={strMeal} />
                            </div>
                            <h3>{strMeal}</h3>
                            <p>{strArea}</p>
                            <Link to={`/meal/${idMeal}`} className='details'> DETAILS </Link>
                        </div> 
                    })
                   }
                </article> 
                : <h1>MEAL NOT FOUND. TRY SOMETHING DIFFERENT.</h1>
            }
        </main>
    )
}

export default Home