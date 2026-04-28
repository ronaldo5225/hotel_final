# 🏨 NOE Hoteles — Comparador de precios estilo Trivago

![NOE](https://img.shields.io/badge/NOE-Hoteles-blue?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=for-the-badge&logo=mongodb)
![Vercel](https://img.shields.io/badge/Vercel-Frontend-black?style=for-the-badge&logo=vercel)
![Render](https://img.shields.io/badge/Render-Backend-purple?style=for-the-badge)

> Plataforma web Full-Stack para comparar y reservar hoteles, inspirada en Trivago. Permite registrar usuarios, hacer reservas y guardar favoritos — todo conectado a una base de datos real en la nube.

---

## 🌐 Demo en vivo

| Servicio | URL |
|----------|-----|
| 🖥️ Frontend (Vercel) | https://hotel-final-k4qr.vercel.app |
| ⚙️ Backend (Render) | https://hotel-final-j681.onrender.com |
| 📡 API Rooms | https://hotel-final-j681.onrender.com/api/rooms |
| 📡 API Users | https://hotel-final-j681.onrender.com/api/users |
| 📡 API Reservas | https://hotel-final-j681.onrender.com/api/reservations |

---

## 📁 Estructura del proyecto

```
hotel_final/
├── backend/                  # Servidor Node.js + Express
│   ├── controllers/          # Lógica de negocio
│   │   ├── bookingController.js   # Control de reservas
│   │   └── roomController.js      # Control de habitaciones
│   ├── middleware/            # Middlewares personalizados
│   ├── models/               # Modelos de MongoDB (Mongoose)
│   │   ├── Booking.js        # Modelo de reservas
│   │   ├── Room.js           # Modelo de habitaciones
│   │   └── User.js           # Modelo de usuarios
│   ├── routes/               # Rutas de la API
│   │   ├── bookingRoutes.js       # Rutas /api/bookings
│   │   ├── reservationRoutes.js   # Rutas /api/reservations
│   │   ├── roomRoutes.js          # Rutas /api/rooms
│   │   └── userRoutes.js          # Rutas /api/users
│   ├── .env                  # Variables de entorno (privado)
│   ├── .env.example          # Ejemplo de variables de entorno
│   ├── package.json          # Dependencias del backend
│   └── server.js             # Punto de entrada del servidor
│
├── frontend/                 # Interfaz de usuario
│   └── index.html            # Página principal (HTML + CSS + JS)
│
├── .gitignore
└── README.md
```

---

## ⚙️ Tecnologías utilizadas

### Frontend
| Tecnología | Uso |
|-----------|-----|
| HTML5 | Estructura de la página |
| CSS3 + Tailwind CSS | Diseño y estilos responsivos |
| JavaScript (Vanilla) | Lógica del cliente, fetch API |
| Google Fonts (Sora) | Tipografía moderna |

### Backend
| Tecnología | Uso |
|-----------|-----|
| Node.js | Entorno de ejecución del servidor |
| Express.js | Framework para crear la API REST |
| Mongoose | ODM para conectar con MongoDB |
| dotenv | Manejo de variables de entorno |
| CORS | Permitir peticiones del frontend |

### Base de datos y nube
| Servicio | Uso |
|---------|-----|
| MongoDB Atlas | Base de datos en la nube (NoSQL) |
| Render | Hosting del backend (24/7) |
| Vercel | Hosting del frontend |
| GitHub | Control de versiones |

---

## 🗄️ Modelos de base de datos

### 👤 User (usuarios)
```js
{
  nombre:   String,   // Nombre completo del usuario
  email:    String,   // Email único (índice)
  password: String,   // Contraseña
  createdAt: Date,    // Fecha de registro
  updatedAt: Date     // Fecha de actualización
}
```

### 🏠 Room (habitaciones)
```js
{
  number:      Number,   // Número de habitación (único)
  type:        String,   // Tipo: 'simple', 'doble', 'suite'
  price:       Number,   // Precio por noche
  available:   Boolean,  // Disponibilidad
  description: String,   // Descripción
  imageUrl:    String,   // URL de imagen
  createdAt:   Date,
  updatedAt:   Date
}
```

### 📋 Booking (reservas)
```js
{
  roomId:      String,   // ID de la habitación
  guestName:   String,   // Nombre del huésped
  guestEmail:  String,   // Email del huésped
  checkIn:     Date,     // Fecha de entrada
  checkOut:    Date,     // Fecha de salida
  totalPrice:  Number,   // Precio total
  notes:       String,   // Notas adicionales
  createdAt:   Date,
  updatedAt:   Date
}
```

---

## 📡 API Endpoints

### Habitaciones `/api/rooms`
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/rooms` | Obtener todas las habitaciones |
| POST | `/api/rooms` | Crear nueva habitación |

### Usuarios `/api/users`
| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/api/users/register` | Registrar nuevo usuario |
| POST | `/api/users/login` | Iniciar sesión |

### Reservas `/api/reservations`
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/reservations` | Obtener todas las reservas |
| POST | `/api/reservations` | Crear nueva reserva |

---

## 🚀 Cómo ejecutar el proyecto localmente

### Requisitos previos
- Node.js v18+
- Git
- Cuenta en MongoDB Atlas

### 1. Clonar el repositorio
```bash
git clone https://github.com/ronaldo5225/hotel_final.git
cd hotel_final
```

### 2. Configurar el backend
```bash
cd backend
npm install
```

Crea un archivo `.env` basado en `.env.example`:
```env
MONGO_URI=mongodb+srv://<usuario>:<password>@cluster0.mongodb.net/hotel_db
PORT=5000
```

### 3. Iniciar el servidor
```bash
node server.js
```
El servidor correrá en `http://127.0.0.1:8080`

### 4. Abrir el frontend
Abre el archivo `frontend/index.html` en tu navegador, o usa Live Server en VS Code.

---

## ✨ Funcionalidades

| Función | Descripción |
|---------|-------------|
| 🔍 Buscador | Filtra hoteles por destino en tiempo real |
| 📅 Fechas | Selector de check-in y check-out |
| ❤️ Favoritos | Guarda hoteles favoritos (localStorage) |
| 📋 Reservas | Sistema completo de reservas guardado en MongoDB |
| 🔐 Registro | Crea cuenta guardada en MongoDB |
| 🔑 Login | Inicio de sesión con validación real |
| 👤 Perfil | Panel de usuario con estadísticas |
| 🎛️ Filtros | Filtra por precio: Económico, Estándar, Premium |
| 📊 Ordenar | Ordena por precio o calificación |
| 📱 Responsive | Diseño adaptable a móvil y desktop |

---

## 🔄 Flujo de la aplicación

```
Usuario abre la página (Vercel)
        ↓
Frontend carga y hace fetch al Backend (Render)
        ↓
Backend consulta MongoDB Atlas
        ↓
MongoDB devuelve las habitaciones
        ↓
Frontend renderiza las tarjetas de hoteles
        ↓
Usuario se registra → Backend guarda en MongoDB (users)
Usuario hace reserva → Backend guarda en MongoDB (bookings)
```

---

## 🌍 Despliegue

### Backend en Render
1. Conectar repositorio de GitHub a Render
2. Seleccionar la carpeta `backend` como raíz
3. Agregar variable de entorno `MONGO_URI`
4. Deploy automático en cada push a `main`

### Frontend en Vercel
1. Conectar repositorio de GitHub a Vercel
2. Seleccionar la carpeta `frontend` como raíz
3. Deploy automático en cada push a `main`

---

## 👨‍💻 Autor

**Ronaldo** — [@ronaldo5225](https://github.com/ronaldo5225)

---

## 📄 Licencia

Este proyecto es de uso educativo y personal.
