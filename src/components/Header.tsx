export const Header = ({ logo, userIcon }: any) => (
  <header className="encabezado">
    <img src={logo} alt="Logo" width={50} height={50} className="logo"/>
    <h2 className="titulo">PokeWeb</h2>
    <button className="titulo-centrado"><a className="enlace" href="/">Inicio</a></button>
    <button className="boton-user"><img src={userIcon} alt="User" width={75} /></button>
  </header>
);