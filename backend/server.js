const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors()); 
app.use(express.json());

// Importar el modelo de Habitación que ya tienes
const Room = require('./models/Room');

// --- RUTAS DE LA API ---

// 1. Ruta de bienvenida
app.get('/', (req, res) => {
  res.send('🏨 API del Hotel funcionando correctamente');
});

// 2. Obtener todas las habitaciones (Esta la usará tu Frontend)
app.get('/api/rooms', async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener datos", error });
  }
});

// Conexión a MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Servidor conectado a MongoDB Atlas'))
  .catch(err => console.error('❌ Error de conexión:', err));

// Puerto dinámico para despliegue
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

