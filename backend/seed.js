const mongoose = require('mongoose');
const Room = require('./models/Room');
require('dotenv').config();

const habitaciones = [
  // ECONÓMICAS
  { number: 101, type: 'simple', price: 80000, available: true, description: 'Habitación económica acogedora con cama individual, baño privado y Wi-Fi. Ideal para viajeros solos.' },
  { number: 102, type: 'simple', price: 90000, available: true, description: 'Habitación sencilla con vista al jardín, perfecta para estadías cortas con todo lo necesario.' },
  { number: 103, type: 'simple', price: 75000, available: true, description: 'Habitación económica con escritorio de trabajo, ideal para viajes de negocios.' },

  // ESTÁNDAR (DOBLE)
  { number: 201, type: 'doble', price: 180000, available: true, description: 'Habitación doble estándar con cama queen, televisor 42", aire acondicionado y baño completo.' },
  { number: 202, type: 'doble', price: 200000, available: true, description: 'Habitación doble con vista a la ciudad, perfecta para parejas o viajeros que buscan comodidad.' },
  { number: 203, type: 'doble', price: 195000, available: true, description: 'Amplia habitación doble con sofá, minibar y baño con tina. Ambiente tranquilo y elegante.' },
  { number: 204, type: 'doble', price: 210000, available: true, description: 'Habitación doble superior con balcón privado y desayuno incluido. Vista panorámica al parque.' },

  // SUITE (PREMIUM)
  { number: 301, type: 'suite', price: 380000, available: true, description: 'Suite ejecutiva con sala de estar separada, cama king size, jacuzzi y vista espectacular a la ciudad.' },
  { number: 302, type: 'suite', price: 420000, available: true, description: 'Suite de lujo con dos ambientes, cocina equipada, terraza privada y servicio de mayordomía 24h.' },
  { number: 303, type: 'suite', price: 500000, available: true, description: 'Suite presidencial con sala, comedor, dos baños, jacuzzi panorámico y acceso a piso VIP.' },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB conectado');

    await Room.deleteMany({});
    console.log('🗑️  Habitaciones anteriores eliminadas');

    await Room.insertMany(habitaciones);
    console.log('🏨 ' + habitaciones.length + ' habitaciones agregadas exitosamente');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

seed();
