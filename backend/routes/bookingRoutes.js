const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Ruta para crear una reserva (Requerimiento de reserva)
router.post('/reservar', bookingController.crearReserva);

module.exports = router;