import {NavLink} from 'react-router-dom';
export const Navbar = () => {
  return (
    <nav>
        <h1>World <span style={{color: 'orangered'}}>Kitchen</span></h1>
        <NavLink to='/' className={({isActive})=> isActive ? 'link active' : 'link'}> HOME </NavLink>
        <NavLink to='/about' className={({isActive})=> isActive ? 'link active' : 'link'}> ABOUT </NavLink>
        <NavLink to='/contact' className={({isActive})=> isActive ? 'link active' : 'link'}> CONTACT </NavLink>
    </nav>
  )
}
