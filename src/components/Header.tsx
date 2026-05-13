export const Header = ({ logo, userIcon }: any) => (
  <header className="encabezado">
    <img src={logo} alt="Logo" width={40} />
    <button className="boton-titulo"><a className="titulo" href="/">PokeWeb</a></button>
    <button className="boton-user"><img src={userIcon} alt="User" width={75} /></button>
  </header>
);