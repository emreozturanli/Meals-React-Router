# MEALS-WITH-REACT

[See the page](https://meals-react-router.vercel.app/)


- I made a multipage website with <b>React Router v6</b>.  
- When user open the site the home page will show all the meals. I get the data from [themealsdb](https://www.themealdb.com/api/json/v1/1/random.php) using <b>AXIOS</b>.
- After clicking one of the meals router will direct user to this specific meals page. In this page there are more informations about this meal.
- Also I created a <b>Navbar</b> component to display in every single page and an <b>Error</b> page. 
- I encountered some warning when I fetch the data. And I found the solution for this specific issue with using <b>useCallback</b>. I will learn more about useCallback soon.
- I did all the styling with pure CSS.

### I used;
  - <b>Components</b>
  - <b>useState</b>
  - <b>useEffect</b>
  - <b>useCallback</b>
  - <b>axios</b>
  - <b>React-Router-DOM <i>(Link, NavLink, isActive )</i>></b>
  - <b>useParams</b>
  - import/export
  - <b>Props</b>
  - React <b>Developer Tool</b>
  - Destructuring props
  - array <b>map</b> method
  - array <b>find</b> method