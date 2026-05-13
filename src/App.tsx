import './App.css'
import pokeball from "./assets/images/pokeball.png"
import icon from "./assets/images/icon.webp"

function App() {
  return (
    <div>
      <header className="encabezado">
        <img src={pokeball} alt="Logo de la web de una pokeball" width={40} />


        <button className="boton-titulo">
          <a className="titulo" href="/">
            PokeWeb
          </a>
        </button>

        <nav className="enlaces">
          <ul>
            <li className="lista">
              <a className="enlace" href="/details">
                Detalles
              </a>
            </li>
          </ul>
        </nav>

        <button className="boton-user">
        <img src={icon} alt="Imagen del logo del usuario" width={75} />
        </button>
      </header>
    </div>
  )
}

export default App