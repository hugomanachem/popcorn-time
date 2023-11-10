import '../Header.css';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    
    return(
        <header className="Header">
           <h1>Welcome to Popcorn Time!</h1>
           <nav>
            <NavLink to="/">Home </NavLink> |
            <NavLink to="about"> About</NavLink>
           </nav>
        </header>

    );
}

export default Header;