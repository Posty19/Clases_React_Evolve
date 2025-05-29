import { Outlet, Link, /* useNavigate */ } from "react-router-dom";
function DashBoard() {
/*   const navigate = useNavigate();

  const toHome = () => {
    navigate("/");
  }; */

  return (
    <div>
      <h1>Panel principal</h1>
      <nav>
        <Link to="/dashboard">Panel principal</Link>
        <Link to="/dashboard/settings">Configuración</Link>
        <Link to='/'>Home</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default DashBoard;
