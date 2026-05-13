import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokemon-Web</title>
    <link rel="stylesheet" href="pokemon.css">
</head>
<body>
    <header class="encabezado">
        <img class="logo" src="hero-pokeball-3430739968171e9fe85357e4739be704.png" alt="Logo de la web de una pokeball" style="width: 40px;">
        <button class="boton-titulo"><a class="titulo" href="pokemon.html">PokeWeb</a></button>
        <nav class="enlaces">
            <ul>
                <li class="lista"><a class="enlace" href="details.html">Detalles</a></li>
            </ul> 
        </nav>
        <button class="boton-user"><img class="logo-user" src="comic-style-user-icon-with-transparent-background-file-png.webp" alt="Imagen del logo del usuario" style="width: 75px;"></button>
    </header>
</body>
</html>
  )
}

export default App
