import {Link} from "react-router-dom"
function Nav(){
    return(
<>
        <div>
         <li> <Link to={"/"}>Home</Link></li>
         <li> <Link to={"/add"}>Product</Link></li>
         <li> <Link to={"/update"}>Update</Link></li>
         <li> <Link to={"/logout"}>Logout</Link></li>
         <li> <Link to={"/profile"}>Profile</Link></li>
         <li> <Link to={"/signup"}>Signup</Link></li>
        </div>
</>
    )
}
export default Nav;