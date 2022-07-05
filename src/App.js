import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Meal from "./pages/Meal";
import Error from "./pages/Error";
import About from "./pages/About";
import { useGlobalContext } from "./context";
import { Navbar } from "./components/Navbar";
import Contact from "./pages/Contact";
function App() {
  const {meals} = useGlobalContext();

  return (
    <BrowserRouter className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home meals={meals}/>}/>
        <Route path="/meal/:mealId" element={<Meal meals={meals}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
