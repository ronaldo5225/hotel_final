const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

router.post('/', roomController.crearHabitacion);
router.get('/', roomController.obtenerHabitaciones);

module.exports = router;