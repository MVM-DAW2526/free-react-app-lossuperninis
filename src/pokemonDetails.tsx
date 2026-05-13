import './App.css';
import pokeball from "./assets/images/pokeball.png"
import icon from "./assets/images/icon.webp"

function App() {
  
  return (
    <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Pokedex Details</title>
        </head>
        <body>
      <header className="encabezado">
        <img src={pokeball} alt="Logo de la web de una pokeball" width={40} />
        <button className="boton-titulo">
          <a className="titulo" href="./pokemonDetails">
            PokeWeb
          </a>
        </button>

        <nav className="enlaces">
          <ul>
            <li className="lista">
              <a className="enlace" href="./pokemonDetails">
                Detalles
              </a>
            </li>
          </ul>
        </nav>
        <button className="boton-user">
        <img src={icon} alt="Imagen del logo del usuario" width={75} />
        </button>
      </header>
      <main>
        <section className="contenido">
        <div className="pokemon-grid" id="mainPkmnGrid">
            <div className="pokemon-card"></div>
            <div className="profile"><h2>Perfil</h2></div>
            <div className="abilities"><h2>Habilidades</h2></div>
            <div className="moves"><h2>Movimientos</h2></div>
            <div className="stats"><h2>Evoluciones</h2></div>
        </div>
        </section>
      </main>
        </body>

    </html>
  )
};


export default App