import "./Navbar.scss";

export const Navbar = () => {
  return (
    <header className="header">
      <div className="headerContainer">
        <img
          src="https://drive.google.com/file/d/1UtjwlbP_D2QbHSuIPhZ68YO6PqDaCUUy/view?usp=share_link"
          alt=""
        />
        <h1 className="tittle">Brink</h1>

        <nav className="navbar">
          <p className="navbarLink">articulos</p>
          <p className="navbarLink">sucursales</p>
          <p className="navbarLink">contacto</p>
          <p className="navbarLink">quienes somos</p>
        </nav>
      </div>
    </header>
  );
};
