import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/signUp'>Sign UP</NavLink>
        </div>
    );
};

export default Header;