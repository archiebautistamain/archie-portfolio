import { NavLink } from "react-router-dom";

const Nav = () => {
    const active = ({ isActive } : { isActive : boolean})=>["font-thin text-2xl ms-3 transition duration-300 ease-in-out hover:underline hover:decoration-sky-600 hover:text-slate-400", isActive ? "font-bold underline underline-offset-1" : null].filter(Boolean).join(" ");
  return (
    <>
     
        <NavLink to="/" className={active}>Home</NavLink>
        <NavLink to="/skills" className={active}>Skills</NavLink>
        <NavLink to="/projects" className={active}>Projects</NavLink>
        <NavLink to="/contact" className={active}>Contact</NavLink>
   
    </>
  )
}

export default Nav