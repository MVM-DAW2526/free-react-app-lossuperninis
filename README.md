[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/-MytgoAU)
# 🚀 Projecte Avaluable: Aplicació React

## 📋 Descripció del Projecte

Heu de dissenyar i implementar una **aplicació web completa amb React**, desplegada a producció, utilitzant les eines professionals del sector.

L'aplicació haurà de ser una **SPA (Single Page Application)** que gestioni dades, tingui una interfície cuidada i es comuniqui amb una API externa o un backend propi (Firebase, JSONPlaceholder, o similar).

La temàtica de l'aplicació és **lliure**. Alguns exemples:
- Gestor de tasques / notes
- Catàleg de productes o contingut (pel·lícules, jocs, llibres...)
- Dashboard d'estadístiques amb dades d'una API pública
- Aplicació de xat o fòrum simple

---

## 🛠️ Stack Tecnològic Obligatori

| Eina | Ús | Obligatori |
|------|----|-----------|
| **React 18+** | Framework principal | ✅ |
| **Vite** | Bundler i servidor de desenvolupament | ✅ |
| **Bun** o **npm** | Gestor de paquets | ✅ (trieu un) |
| **GitHub** | Control de versions i col·laboració | ✅ |
| **Vercel** | Desplegament a producció | ✅ |
| **CSS / CSS Modules** | Estils | ✅ |

### Comandes d'inici del projecte

```bash
# Amb Bun
bun create vite@latest nom-projecte -- --template react
cd nom-projecte
bun install
bun run dev

# Amb npm
npm create vite@latest nom-projecte -- --template react
cd nom-projecte
npm install
npm run dev
```

---

## 👥 Organització del Grup

- **Grups de 3 persones** (assignats pel professor)
- Cada membre ha de tenir **commits visibles a GitHub** — sense commits, sense nota
- Cal definir i documentar el rol de cadascú al `README.md` del projecte
- Les notes **no són úniques de grup**: cada integrant té la seva pròpia nota individual basada en la seva contribució demostrable

> ⚠️ Els rols no exclouen la col·laboració. Tothom ha de conèixer tot el projecte.

---

## 📅 Planificació de la Sessió

**Objectiu:** Tenir l'aplicació funcionant en local amb les funcionalitats bàsiques implementades.

### ✅ Lliurables de la Sessió

Al finalitzar la sessió, el repositori GitHub ha de contenir:

- [ ] Projecte React + Vite creat i funcionant
- [ ] Estructura de carpetes ben organitzada
- [ ] Mínim **3 components reutilitzables**
- [ ] Navegació entre pàgines
- [ ] Gestió d'estat amb `useState`
- [ ] Almenys una **crida a una API** amb `useEffect`
- [ ] Disseny responsive bàsic
- [ ] `README.md` del projecte amb descripció, captures i instruccions
- [ ] Commits de **tots els membres** del grup

---

## 📁 Estructura de Carpetes Recomanada

```
nom-projecte/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/          # Imatges, fonts, SVGs
│   ├── components/      # Components reutilitzables
│   │   ├── ui/          # Botons, inputs, cards...
│   │   └── layout/      # Header, Footer, Sidebar...
│   ├── pages/           # Pàgines/vistes de l'aplicació
│   ├── hooks/           # Hooks personalitzats
│   ├── services/        # Crides a APIs
│   ├── context/         # Context API (si s'usa)
│   ├── utils/           # Funcions auxiliars
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 📝 Requisits Tècnics Mínims

### Components i React
- [ ] Mínim 5 components funcionals
- [ ] Props tipades (TypeScript)
- [ ] Ús de `useState` i `useEffect`
- [ ] Mínim 1 hook personalitzat
- [ ] Llistes renderitzades amb `.map()` i `key` correctes

### Dades i API
- [ ] Crida asíncrona a una API REST (fetch)
- [ ] Estats de càrrega i error
- [ ] Visualització de les dades obtingudes

### Disseny i UX
- [ ] Disseny responsive (mòbil + escriptori)
- [ ] Disseny atractiu i consistente
- [ ] Navegació clara i usable

### Git i Col·laboració
- [ ] Commits descriptius i freqüents de tots els membres

### Desplegament
- [ ] Aplicació desplegada a Vercel

---

## 🏆 Rúbrica d'Avaluació

> La nota final de cada alumne és una combinació de la nota grupal i la nota individual.
> **Nota final = 60% Nota Grup + 40% Nota Individual**

---

#### 🔵 Avaluació de Grup

| Criteri | Insuficient (0-4) | Suficient (5-6) | Notable (7-8) | Excel·lent (9-10) | Pes |
|---------|------------------|-----------------|---------------|-------------------|-----|
| **Configuració del projecte** (Vite + React, estructura de carpetes, `.gitignore`) | No s'ha configurat o té errors greus | Configurat però amb errors o estructura deficient | Configurat correctament amb bona estructura | Configuració impecable, estructura professional | 10% |
| **Components React** (qualitat, reutilització, separació de responsabilitats) | Menys de 3 components o sense reutilització | 3 components bàsics funcionals | 5+ components ben separats i reutilitzables | Components modulars, ben estructurats amb props i composició | 20% |
| **Gestió d'estat** (`useState`, flux de dades entre components) | No hi ha gestió d'estat o és incorrecta | Estat bàsic amb `useState` en un component | Estat compartit entre components amb props | Estat ben gestionat, flux clar, sense prop drilling innecessari | 15% |
| **Crida a API** (fetch, async/await, useEffect) | No hi ha crida o no funciona | Crida bàsica que funciona però sense gestió d'errors | Crida funcional amb loading state | Crida completa amb loading, error handling i dades mostrades correctament | 20% |
| **Disseny i responsivitat** (layout, colors, tipografia, mòbil) | Sense estils o aspecte molt descuidat | Estils bàsics però no responsive | Disseny correcte i responsive | Disseny atractiu, responsive i consistent amb guia d'estil | 15% |
| **Git — commits grupals** (freqüència, missatges, tots els membres) | Menys de 5 commits o d'un sol membre | Commits de 2 membres, missatges poc descriptius | Commits de tots, missatges acceptables | Commits freqüents de tots, missatges clars i descriptius | 20% |

#### 🟡 Avaluació Individual

| Criteri | Insuficient (0-4) | Suficient (5-6) | Notable (7-8) | Excel·lent (9-10) | Pes |
|---------|------------------|-----------------|---------------|-------------------|-----|
| **Commits individuals** (número, qualitat, codi propi identificable) | Sense commits o copiat d'un company | 1-2 commits amb codi bàsic | 3+ commits amb contribucions clares | 5+ commits, contribucions significatives i identificables | 40% |
| **Comprensió del codi** (el professor pot preguntar sobre el codi que has fet) | No pot explicar el codi | Explica superficialment | Explica correctament la majoria del seu codi | Explica amb detall i defensa les decisions tècniques | 35% |
| **Rol i responsabilitat** (ha complert el seu rol definit al README) | No ha fet la seva part | Ha fet una part mínima | Ha complert el seu rol | Ha superat les expectatives del seu rol | 25% |

---

## 📊 Criteris d'Avaluació dels Mòduls Coberts

Aquest projecte avalua els següents **Resultats d'Aprenentatge i Criteris d'Avaluació** del currículum. Els criteris marcats amb ✅ es treballen directament; els marcats amb ◑ es treballen parcialment.

---

### Mòdul 0485 — Programació

| RA | Criteris | |
|----|----------|-|
| **RA 1** — Estructura d'un programa | 1.2 Crea projectes de desenvolupament · 1.3 Utilitza entorns integrats (VSCode, DevTools) · 1.4 Tipus de variables · 1.5 Crea i fa servir variables · 1.6 Constants i literals · 1.7 Operadors en expressions · 1.9 Introdueix comentaris al codi | ✅ |
| **RA 2** — Programació orientada a objectes bàsica | 2.2 Escriu programes simples · 2.3 Instancia objectes de classes predefinides · 2.4 Utilitza mètodes i propietats · 2.7 Incorpora i utilitza llibreries (React, axios...) | ✅ |
| **RA 3** — Estructures de control i depuració | 3.1 Estructures de selecció (if/else, ternari, switch) · 3.2 Estructures de repetició (map, forEach, for) · 3.4 Control d'excepcions (try/catch) · 3.5 Programes amb estructures de control · 3.6 Prova i depura (DevTools, consola) · 3.7 Comenta i documenta el codi | ✅ |
| **RA 4** — Classes i OOP | 4.2 Defineix classes/components · 4.3 Defineix propietats i mètodes · 4.5 Instancia i utilitza objectes · 4.6 Visibilitat i encapsulament (closures, mòduls ES) | ◑ |
| **RA 5** — Entrada/sortida i GUI | 5.6 Crea interfícies gràfiques (components React) · 5.7 Programa controladors d'esdeveniments · 5.8 Programes que utilitzen GUI per entrada i sortida | ✅ |
| **RA 6** — Tipus avançats de dades | 6.1 Arrays · 6.3 Llistes (state arrays) · 6.4 Iteradors (map, filter, reduce) · 6.9 Manipulació de documents JSON (API responses) · 6.10 Operacions agregades sobre col·leccions | ✅ |
| **RA 7** — Característiques avançades OOP | 7.8 Comenta i documenta el codi | ◑ |
| **RA 9** — Gestió d'informació en bases de dades | 9.1 Mètodes d'accés a SGBD (API REST) · 9.4 Recupera i mostra informació · 9.6 Aplicacions que mostren informació emmagatzemada | ◑ |

---

### Mòdul 0612 — Desenvolupament Web en Entorn Client (DWEC)

| RA | Criteris | |
|----|----------|-|
| **RA 1** — Arquitectures i tecnologies client web | 1.1 Models d'execució client vs. servidor · 1.2 Capacitats dels navegadors · 1.3 Principals llenguatges client (JS) · 1.5 Avantatges de la programació de guions · 1.6 Integració HTML + JS · 1.7 Eines de programació i prova | ✅ |
| **RA 2** — Sentències simples i sintaxi JS | 2.1 Selecció del llenguatge (JS/JSX) · 2.2 Variables i operadors · 2.3 Àmbits de variables (let/const/closure) · 2.4 Conversions de tipus · 2.5 Mecanismes de decisió · 2.6 Bucles · 2.7 Comentaris · 2.8 Eines i entorns (VSCode, DevTools) | ✅ |
| **RA 3** — Objectes predefinits del llenguatge | 3.1 Objectes predefinits JS · 3.2 Window i Document · 3.3 Canvi d'aspecte del navegador/document · 3.5 Interacció amb l'usuari · 3.7 Emmagatzematge (localStorage/sessionStorage) · 3.8 Depura i documenta | ✅ |
| **RA 4** — Estructures definides per l'usuari | 4.1 Funcions predefinides · 4.2 Funcions definides per l'usuari · 4.3-4.4 Arrays · 4.5 Operacions agregades · 4.6-4.9 Orientació a objectes en JS · 4.10 Patrons de disseny (components, hooks) · 4.11 Depura i documenta | ✅ |
| **RA 5** — Esdeveniments | 5.1-5.4 Captura i gestió d'esdeveniments · 5.5-5.6 Formularis web i validació · 5.7 Expressions regulars en validació · 5.8 Prova i documenta | ✅ |
| **RA 6** — Model d'objectes del document (DOM) | 6.1-6.2 Model DOM, objectes, propietats i mètodes · 6.3 Accés a l'estructura del document · 6.4 Crea i modifica elements (React renderitza al DOM) · 6.5 Accions als esdeveniments · 6.8 Separació contingut/aspecte/comportament | ✅ |
| **RA 7** — Comunicació asíncrona | 7.1 Avantatges/inconvenients comunicació asíncrona · 7.2 Mecanismes disponibles (fetch, axios) · 7.3-7.5 Objectes i comunicació asíncrona (async/await, Promises) · 7.6 Formats JSON en enviament/recepció · 7.8 Llibreries i frameworks (React) · 7.9 Crea, prova i documenta amb frameworks | ✅ |

---

### Mòdul 0615 — Disseny d'Interfícies Web (DIW)

| RA | Criteris | |
|----|----------|-|
| **RA 1** — Planificació de la interfície | 1.1 Comunicació visual i principis bàsics · 1.2 Colors i tipografies per pantalla · 1.3 Alternatives de presentació de la informació · 1.4 Guia d'estil · 1.5-1.6 Tecnologies i plantilles de disseny | ✅ |
| **RA 2** — Estils homogenis | 2.1 Modificació d'etiquetes HTML · 2.2-2.3 Estils directes i fulls externs · 2.5 Redefinició d'estils · 2.6 Propietats dels elements · 2.7 Classes d'estils · 2.9 Frameworks responsive (CSS Grid, Flexbox) | ✅ |
| **RA 3** — Arxius multimèdia per al web | 3.1 Llicències i drets d'autor en material multimèdia · 3.2 Formats d'imatge adequats (SVG, WebP, PNG) · 3.7 Importació/exportació d'imatges en diversos formats | ◑ |
| **RA 4** — Integració de contingut multimèdia | 4.1 Tecnologies de contingut multimèdia i interactiu · 4.5 Afegeix elements multimèdia a documents web · 4.6 Afegeix interactivitat (animacions CSS, transicions) · 4.7 Verifica en navegadors i dispositius | ◑ |
| **RA 5** — Accessibilitat | 5.1 Necessitat de dissenyar webs accessibles · 5.2-5.3 Pautes WCAG (atributs alt, aria-label, contrast) · 5.7 Verificació en navegadors i tecnologies · 5.8 SEO i visibilitat (meta tags, semàntica HTML) | ✅ |
| **RA 6** — Usabilitat | 6.1 Anàlisi d'usabilitat · 6.3 Adequació a l'objectiu i als usuaris · 6.4 Facilitat de navegació · 6.6 Verificació en navegadors | ✅ |

---

### Mòdul 0489 — Programació Multimèdia i Dispositius Mòbils

| RA | Criteris | |
|----|----------|-|
| **RA 1** — Tecnologies per a dispositius mòbils | 1.1 Limitacions d'execució en mòbils (rendiment, mida pantalla) · 1.2 Tecnologies de dev mòbil (responsive, PWA) · 1.3 Entorns de treball per a mòbils (Vite, DevTools mòbil) · 1.8 Emuladors (DevTools responsive mode) | ✅ |
| **RA 2** — Aplicacions per a dispositius mòbils | 2.5 Connexions HTTP/HTTPS (fetch a APIs externes) · 2.7 Proves d'interacció usuari-aplicació · 2.8 Empaqueta i desplega (Vercel) · 2.9 Documenta els processos de desenvolupament | ✅ |
| **RA 3** — Programes amb contingut multimèdia | 3.6 Animacions (CSS transitions, keyframes, Framer Motion) · 3.7 Reprodueix contingut multimèdia (imatges, vídeos integrats) | ◑ |

---

## 📌 Normes i Avisos Importants

> ⚠️ **Sense commits a GitHub = sense nota individual**, independentment de la nota del grup.

> ⚠️ **El codi ha de ser propi.** L'ús d'IA és permès com a eina d'ajuda, però heu de poder explicar i defensar tot el codi que heu lliurat. Si no podeu explicar una línia, és que no és vostra.

> ⚠️ **L'aplicació ha de funcionar a Vercel** en el moment de la presentació. Si no funciona en producció, la part de desplegament puntua 0.

> ℹ️ Els grups s'han de registrar i la temàtica ha de ser aprovada **amb antelació**. Dos grups no poden fer la mateixa aplicació.

---

## 📎 Recursos Recomanats

- [Documentació oficial de React](https://react.dev)
- [Vite — Getting Started](https://vitejs.dev/guide/)
- [Vercel — Deploying a Vite App](https://vercel.com/docs/frameworks/vite)
- [React Router](https://reactrouter.com/en/main)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) — API de proves
- [Open Library API](https://openlibrary.org/developers/api) — Exemple d'API pública
- [The Movie DB API](https://developer.themoviedb.org/) — Exemple d'API pública

---

---

## 🗂️ Correspondència Rúbrica ↔ Criteris Curriculars

Cada criteri de la rúbrica cobreix els següents codis curriculars:

| Criteri de la Rúbrica | Mòduls i Criteris Coberts |
|-----------------------|---------------------------|
| Configuració del projecte | 0485 RA1.2, RA1.3 · 0612 RA1.6, RA1.7 |
| Components React | 0485 RA2.2, RA4.2, RA4.3, RA4.5 · 0612 RA4.2, RA4.6-4.9 |
| Gestió d'estat | 0485 RA1.5, RA3.1, RA3.2 · 0612 RA4.1-4.5 |
| Crida a API | 0485 RA9.1, RA9.4 · 0612 RA7.1-7.6 |
| Disseny i responsivitat | 0615 RA1.1-1.6, RA2.1-2.9 · 0489 RA1.1-1.3 |
| Git i commits grupals | 0485 RA1.2, RA1.3 · 0612 RA1.7, RA2.8 |
| Desplegament a Vercel | 0489 RA2.8 · 0612 RA7.7 |
| Hook personalitzat | 0485 RA4.2-4.3 · 0612 RA4.2, RA4.10 |
| Gestió d'errors i casos límit | 0485 RA3.4, RA3.6 · 0612 RA7.3-7.5 |
| Formularis i validació | 0612 RA5.1-5.7 · 0615 RA6.1, RA6.3 |
| Qualitat del codi | 0485 RA3.7, RA7.8 · 0612 RA4.11, RA5.8 |
| Accessibilitat i UX | 0615 RA5.1-5.3, RA6.1-6.4 |
| Animacions i multimèdia | 0615 RA4.5-4.6 · 0489 RA3.6-3.7 |
| Presentació oral | 0485 RA3.6 · 0612 RA1.7 · 0615 RA1.4 |
