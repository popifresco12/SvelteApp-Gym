<div align="center">
  <img src="public/favicon.png" alt="SvelteApp-Gym Logo" width="80" />
  <h1 align="center">🏋️ SvelteApp-Gym</h1>
  <p align="center">
    <strong>Aplicación web de gestión de gimnasio</strong>
    <br />
    CRUD de clientes y monitores con Svelte 3 + Firebase Firestore
  </p>
  <p align="center">
    <a href="https://svelte.dev"><img src="https://img.shields.io/badge/Svelte-3.x-FF3E00?style=for-the-badge&logo=svelte&logoColor=white" alt="Svelte 3" /></a>
    <a href="https://firebase.google.com"><img src="https://img.shields.io/badge/Firebase-9.x-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase 9" /></a>
    <a href="https://rollupjs.org"><img src="https://img.shields.io/badge/Rollup-2.x-EC4A3F?style=for-the-badge&logo=rollup.js&logoColor=white" alt="Rollup 2" /></a>
    <a href="https://nodejs.org"><img src="https://img.shields.io/badge/Node.js-16+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" /></a>
    <img src="https://img.shields.io/badge/Estado-En%20desarrollo-yellow?style=for-the-badge" alt="Estado: en desarrollo" />
  </p>
</div>

---

## 📋 Descripción

**SvelteApp-Gym** es una aplicación web moderna para la gestión de un gimnasio. Permite realizar operaciones **CRUD** (Crear, Leer, Actualizar, Eliminar) sobre dos entidades principales:

- **👥 Clientes** — Registrar, visualizar, modificar y dar de baja a los miembros del gimnasio.
- **👨‍🏫 Monitores** — Gestionar el equipo de instructores y entrenadores.

Construida con **Svelte 3** en el frontend y **Firebase Firestore** (v9 modular SDK) como base de datos en tiempo real, la aplicación ofrece una experiencia rápida, reactiva y sin recargas de página.

---

## ✨ Características

| Característica | Descripción |
|---|---|
| ✅ **CRUD completo de clientes** | Añade, lista, edita y elimina clientes con todos sus datos (nombre, apellidos, horario, edad, imagen). |
| ✅ **CRUD completo de monitores** | Gestión completa del equipo de monitores del gimnasio. |
| ✅ **Base de datos en tiempo real** | Sincronización automática con Firebase Firestore. |
| ✅ **Interfaz reactiva** | Actualización instantánea de la UI gracias a Svelte. |
| ✅ **Arquitectura SPA** | Aplicación de una sola página sin recargas. |
| ✅ **Despliegue sencillo** | Compilación estática lista para subir a Firebase Hosting, Vercel, Netlify, etc. |
| ✅ **Código modular** | Configuración de Firebase separada en su propio módulo (`src/firebase.js`). |

---

## 🛠️ Tech Stack

| Tecnología | Versión | Propósito |
|---|---|---|
| [![Svelte](https://img.shields.io/badge/Svelte-3.x-FF3E00?logo=svelte)](https://svelte.dev) | 3.x | Framework frontend reactivo y compilado |
| [![Firebase](https://img.shields.io/badge/Firebase-9.x-FFCA28?logo=firebase)](https://firebase.google.com) | 9.x (modular) | Backend: autenticación y base de datos Firestore |
| [![Rollup](https://img.shields.io/badge/Rollup-2.x-EC4A3F?logo=rollup.js)](https://rollupjs.org) | 2.x | Bundler y empaquetador de módulos |
| [![Node.js](https://img.shields.io/badge/Node.js-16+-339933?logo=node.js)](https://nodejs.org) | 16+ | Entorno de ejecución para desarrollo |

**Otras dependencias destacadas:**
- `firebase` ^9.2.0 — SDK de Firebase con Firestore
- `sirv-cli` ^1.0.0 — Servidor estático para producción
- `rollup-plugin-svelte` — Integración de Svelte con Rollup
- `rollup-plugin-livereload` — Recarga automática en desarrollo
- `rollup-plugin-terser` — Minificación para producción

---

## 📁 Estructura del proyecto

```
SvelteApp-Gym/
├── public/                  # Archivos estáticos (servidos en producción)
│   ├── build/               # Código compilado por Rollup
│   │   ├── bundle.js        #  JavaScript empaquetado
│   │   ├── bundle.js.map    #  Source map para depuración
│   │   └── bundle.css       #  Estilos compilados
│   ├── favicon.png          #  Icono de la aplicación
│   ├── global.css           #  Estilos globales
│   └── index.html           #  Punto de entrada HTML
├── scripts/                 # Utilidades (setupTypeScript.js)
├── src/                     # Código fuente de la aplicación
│   ├── App.svelte           #  Componente principal con la lógica CRUD
│   ├── firebase.js          #  Configuración e inicialización de Firebase
│   └── main.js              #  Punto de entrada de la app Svelte
├── .gitattributes
├── package.json             # Dependencias y scripts
├── package-lock.json
├── rollup.config.js         # Configuración de Rollup
└── README.md                # Este archivo
```

---

## 🚀 Instalación

### Prerrequisitos

- **Node.js** v16 o superior ([descargar](https://nodejs.org/))
- **npm** (incluido con Node.js)
- Una cuenta de **Firebase** con un proyecto activo ([firebase.google.com](https://firebase.google.com))

### Pasos

1. **Clona el repositorio**

```bash
git clone https://github.com/popifresco12/SvelteApp-Gym.git
cd SvelteApp-Gym
```

2. **Instala las dependencias**

```bash
npm install
```

---

## 🔥 Configuración de Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/) y crea o selecciona un proyecto.

2. En **Firestore Database**, haz clic en **Crear base de datos** y elige el modo de prueba (o configura reglas de seguridad más adelante).

3. En **Configuración del proyecto** → **General**, baja hasta **Tus aplicaciones** y crea una app web. Copia el objeto de configuración.

4. Abre el archivo `src/firebase.js` y reemplaza las credenciales existentes con las tuyas:

```javascript
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROYECTO.firebaseapp.com",
  projectId: "TU_PROYECTO",
  storageBucket: "TU_PROYECTO.appspot.com",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
```

5. **Crea las colecciones en Firestore** (opcional, la app las creará al primer uso):

   - `clientes` — documentos con campos: `nombre`, `apellidos`, `horario`, `imagen`, `edad`
   - `monitores` — documentos con campos: `nombre`, `apellidos`, `horario`, `imagen`, `edad`

> ⚠️ **Importante:** No subas tus credenciales reales a GitHub. El archivo `firebase.js` ya debe estar en `.gitignore` o, si lo subes, asegúrate de usar variables de entorno.

---

## ▶️ Cómo ejecutar

### Modo desarrollo (con recarga automática)

```bash
npm run dev
```

Esto inicia Rollup en modo *watch* y sirve la aplicación en `http://localhost:5000`. Cualquier cambio en `src/` se reflejará automáticamente en el navegador.

### Build de producción

```bash
npm run build
```

Genera los archivos optimizados y minificados en `public/build/`.

### Servir en producción

```bash
npm run start
```

Usa `sirv-cli` para servir la carpeta `public/` como un sitio estático.

---

## 📸 Capturas de pantalla

> *🖼️ Aquí irá una captura de pantalla de la aplicación en funcionamiento.*
>
> *Ejemplo:*
>
> ![Screenshot placeholder](https://via.placeholder.com/800x450/1a1a2e/e94560?text=SvelteApp-Gym+%7C+Gesti%C3%B3n+de+Gimnasio)

---

## 🌐 Despliegue

Esta aplicación genera una carpeta `public/` con archivos 100% estáticos, lista para desplegar en:

| Plataforma | Instrucciones |
|---|---|
| [Firebase Hosting](https://firebase.google.com/docs/hosting) | `firebase init` → seleccionar `public/` → `firebase deploy` |
| [Vercel](https://vercel.com) | Conectar repo → framework: `Other` → output: `public` |
| [Netlify](https://netlify.com) | Arrastrar `public/` o conectar repo → publish: `public` |
| [Surge](https://surge.sh) | `npm run build && surge public mi-proyecto.surge.sh` |

---

## 🧑‍💻 Autor

**Carlo** — [@popifresco12](https://github.com/popifresco12)

---

## 📄 Licencia

Este proyecto es de uso personal/educativo. Consulta el archivo `LICENSE` si está disponible.

---

<p align="center">
  Hecho con ❤️ usando <a href="https://svelte.dev">Svelte</a> + <a href="https://firebase.google.com">Firebase</a>
</p>
