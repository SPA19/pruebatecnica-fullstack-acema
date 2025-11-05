# Prueba Técnica - Acema Ingenieria

Este proyecto implementa una API REST en Express.js y React(Vite) en la parte del frontend para gestionar el registro tareas de los empleados.

## 🛠️ Tecnologías Utilizadas
# Backend
- Node.js
- Express.js
- MongoDB
- Swagger (para documentación de la API)

# Frontend
- React (vite)
- Tailwind CSS

## ✨ Funcionalidades

- Registro de tareas con titulo descripcion estado de tarea y fecha de creación.
- Listado de tareas registradas.
- Actualización de tareas.
- Eliminación de una tarea registrada.

## 📋 Estructura del Proyecto

- **Express**: Framework utilizado para construir la API REST.
- **Base de Datos**: Almacena los registros de tareas en **MongoDB**.
- **Swagger**: Documentación generada en Swagger para los endpoints.
- **React**: Para la gestion de tareas por interfaz

## ⭐ Requisitos Previos

- [Node.js](https://nodejs.org/) v20.17.0
- [npm](https://www.npmjs.com/) para el sistema de gestion de paquetes.
- [MongoDB](https://www.mongodb.com/) para la base de datos.

## ⚙️ Configuración del Proyecto

1. **Clonar el Repositorio de GitHub:**
```bash
  git clone https://github.com/SPA19/pruebatecnica-fullstack-acema
```

2. **Navega al directorio del proyecto backend:**
```
  cd backend
```

3. **Instalar Dependencias:**
```
  npm install
```

4. **Configurar Variables de Entorno:**

- Crea un archivo `.env` en la raíz del proyecto y añade la configuración para la base de datos y el puerto del servidor.

```
  URL=localhost
  PORT=3000
  MONGODB_URI=mongodb+srv://simonposada17:XPJAfUfMg6NWF5QZ@cluster0.ikmmo2b.mongodb.net/task-manager
```

5. **Ejecución:**
```
  npm run dev
```

6. **Ahora navega al directorio del proyecto frontend:**
```
  cd frontend
```
7. **Instalar Dependencias:**
```
  npm install
```
8. **Ejecución:**
```
  npm run dev
```

**Nota: Ejecutar en diferentes terminales cada carpeta del proyecto es decir backend y frontend, ejecutar en simultaneo**

## 📊 Estructura de la Base de Datos

La base de datos MongoDB incluye una colección vehiculos para almacenar la información de los vehículos registrados en el parqueadero. El modelo es el siguiente:

```
{
  "_id": "ObjectId",
  "title": "string",
  "description": "String"
  "completed": "boolean"
  "createdAt": "date",
}
```
## ⚡ Consideraciones Técnicas

- Manejo de errores en las solicitudes HTTP.
- Estructura modular para mantener la escalabilidad y limpieza del código.
- Documentación en Swagger disponible en http://localhost:3000/api-docs.

## 👨‍💻 Autor

Desarrollado por Simón Posada Acosta - [simon.150@hotmail.com]