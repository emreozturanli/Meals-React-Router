import axios from "axios";
import React,{ useContext, useEffect, useState, useCallback } from "react"

const AppContext = React.createContext();
const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const AppProvider = ({children}) => {
    const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState('');

    const getMeals = useCallback (async () => {
      try {
          const res = await axios.get(url+`${search}`);
          setMeals(res.data.meals)

      } catch (error) {
        console.log(error)
      }
    },[search])

    useEffect(()=>{
        getMeals();
    },[search,getMeals])
    
    console.log(meals);

  return (
    <AppContext.Provider value={{meals, search, setSearch}}>
        {children}
    </AppContext.Provider>
  ) 
}
export const useGlobalContext = () => {
    return useContext(AppContext);
  };

export {AppContext, AppProvider}