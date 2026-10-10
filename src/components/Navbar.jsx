import "../styles/Navbar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <a href="#home" className="brand">
        <span className="logo">DW</span>
        <span className="name">DERICH <strong>DUKU WANI</strong></span>
      </a>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
