import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer
 from "../Footer/Footer";
function HomeLayout (){

    
    return(
        <div className="main-container">
            <Navbar />
            <Outlet/>
            <Footer />
        </div>
    )
}
export default HomeLayout;