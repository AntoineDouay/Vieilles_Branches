 
import logo from "../assets/logo.png"
import "./NavBar.css"

function NavBar() {
    return (
        <div className="NavBar">
            <img className="NavBar-img" src={logo}/>
            <h1 className="NavBar-text">Vieilles Branches</h1>
        </div>
    )
}

export default NavBar