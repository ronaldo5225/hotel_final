		const mongoose = require('mongoose');
const Room = require('./models/Room'); 
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('--- 🌐 Conectado a MongoDB Atlas ---');
    
    const nuevaHabitacion = new Room({
      number: 505,
      type: 'suite',
      price: 350000,
      available: true
    });

    await nuevaHabitacion.save();
    console.log('✅ ¡Éxito! Habitación 505 guardada en Atlas');
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Error en la prueba:', err);
    process.exit(1);
  });






