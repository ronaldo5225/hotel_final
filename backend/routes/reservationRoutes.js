const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

router.post('/', async (req, res) => {
  try {
    const { hotelNombre, nombre, email, checkin, checkout, huespedes, precio } = req.body;

    const reserva = new Booking({
      roomId: req.body.hotelId || 'N/A',
      guestName: nombre,
      guestEmail: email,
      checkIn: new Date(checkin),
      checkOut: new Date(checkout),
      totalPrice: precio,
      notes: `Hotel: ${hotelNombre} | Huéspedes: ${huespedes}`
    });

    await reserva.save();
    res.status(201).json({ mensaje: 'Reserva guardada', reserva });
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar reserva' });
  }
});

router.get('/', async (req, res) => {
  try {
    const reservas = await Booking.find().sort({ createdAt: -1 });
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener reservas' });
  }
});

module.exports = router;