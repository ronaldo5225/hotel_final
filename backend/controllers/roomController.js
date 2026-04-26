const Room = require('../models/Room');

// REQUERIMIENTO: Agregar habitaciones al sistema
exports.crearHabitacion = async (req, res) => {
    try {
        const nuevaHabitacion = new Room(req.body);
        await nuevaHabitacion.save();
        res.status(201).json({ message: 'Habitación registrada con éxito', nuevaHabitacion });
    } catch (error) {
        res.status(400).json({ message: 'Error al registrar habitación', error });
    }
};

// REQUERIMIENTO: Ver todas las habitaciones
exports.obtenerHabitaciones = async (req, res) => {
    try {
        const habitaciones = await Room.find();
        res.json(habitaciones);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener datos', error });
    }
};