import { Link, NavLink } from "react-router-dom"

export default function Navbar() {

  function currentLinkClassName({isActive}) {
    return isActive ? "current-link" : ""
  }

  return (
    <header className="navbar">
      <Link to="/" className="navbar--logo">#ALTERNATEMED</Link>
      <nav className="navbar--links">
        <NavLink to="/map" className={currentLinkClassName}>Map</NavLink>
        <NavLink to="/about" className={currentLinkClassName}>About</NavLink>
        <NavLink to="/doctors" className={currentLinkClassName}>Doctors</NavLink>
      </nav>
    </header>
  )
}
