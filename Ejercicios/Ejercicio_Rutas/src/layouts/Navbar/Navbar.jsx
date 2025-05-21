import { Link } from "react-router-dom";

const Navbar = ()=>{

    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to="/About">Sobre Nosotros</Link>
            <Link to="/Contact">Contacto</Link>
            <Link to="/Counter">Contador</Link>
        </nav>
    );
}
export default Navbar;