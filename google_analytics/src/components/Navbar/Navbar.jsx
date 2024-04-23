import { NavLink } from "react-router-dom"

export const Navbar = (props) => {

  return (
    <nav>
        <ul>
            {props.links.map((link, index) =>{
        return(
            <li>
            <NavLink to={link.link} key={index}>
                {link.name}
            </NavLink>
            </li>
        );
        })}
        </ul>
    </nav>
  );
};
