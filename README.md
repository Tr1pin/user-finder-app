## 📝 Descripción del Ejercicio
El objetivo de este ejercicio es desarrollar una aplicación en React que consuma una API pública para obtener y mostrar un listado de usuarios, permitiendo la búsqueda y el filtrado dinámico de los dichos datos. Además, se debe permitir al usuario un botón que cambie de modo claro/oscuro.

### ✅ Requisitos
#### 📌 Lista de Usuarios
Obtener una lista de 20 usuarios desde la API de: https://randomuser.me/
Mostrar la siguiente información de cada usuario:
- Nombre completo
- Género
- País
- Foto de perfil
#### 🎯 Filtros y Búsqueda
Filtrado por género mediante useReducer.
Barra de búsqueda para encontrar usuarios por nombre utilizando useMemo.
La barra de búsqueda debe recibir automáticamente el foco al cargar la aplicación con useRef.
#### 🌗 Modo Claro/Oscuro
Implementar un contexto global (useContext) para gestionar el tema de la aplicación.

#### 🚀 Optimización
Optimizar el filtrado de usuarios con useMemo para evitar re-cálculos innecesarios.

#### 🛠️ Cómo Usar la Aplicación
Para ejecutar el proyecto en tu máquina local:

##### 1️⃣ Clonar el repositorio:
``` bash
git clone https://github.com/Tr1pin/user-finder-app
```

##### 2️⃣ Acceder al directorio del proyecto:

``` bash
cd user-finder-app
```
##### 3️⃣ Instalar las dependencias:


``` bash
npm install
```
##### 4️⃣ Ejecutar la aplicación:

``` bash
npm run dev
```
##### 5️⃣ Abrir en el navegador:
Entra en http://localhost:5173/ (o puerto que muestra la terminal).

#### 📚 Cosas Aprendidas
Uso de useReducer para gestionar el estado global de los filtros.
Aplicación de useMemo para optimizar el rendimiento de búsquedas y filtrado.
Uso de useRef para manejar el enfoque automático en la barra de búsqueda.
Creación de un contexto global con useContext para gestionar el tema de la aplicación.
Mejores prácticas en la estructuración y organización de un proyecto en React.