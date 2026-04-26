const Booking = require('../models/Booking');

exports.crearReserva = async (req, res) => {
    try {
        const { habitacion, fechaEntrada, fechaSalida, usuario } = req.body;

        // Verificar que la habitación existe
        const room = await Room.findById(habitacion);
        if (!room) {
            return res.status(404).json({ message: 'Habitación no encontrada' });
        }

        // Calcular precio total
        const nights = Math.ceil((new Date(fechaSalida) - new Date(fechaEntrada)) / (1000 * 60 * 60 * 24));
        const precioTotal = room.precioBase * nights;

        // BUSCAR CHOQUES DE FECHAS
        const choque = await Booking.findOne({
            habitacion: habitacion,
            estado: { $ne: 'Cancelada' },
            $or: [
                { fechaEntrada: { $lt: fechaSalida }, fechaSalida: { $gt: fechaEntrada } }
            ]
        });

        if (choque) {
            return res.status(400).json({ message: 'La habitación ya está ocupada en esas fechas' });
        }

        // Si está libre, creamos la reserva
        const nuevaReserva = new Booking({
            habitacion,
            usuario,
            fechaEntrada,
            fechaSalida,
            precioTotal,
            estado: 'Confirmada'
        });

        await nuevaReserva.save();
        res.status(201).json({ message: 'Reserva creada con éxito', nuevaReserva });

    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor', error });
    }
};
// Función para cancelar (Requerimiento de gestión)
exports.cancelarReserva = async (req, res) => {
    try {
        const { id } = req.params;
        const reserva = await Booking.findByIdAndUpdate(id, { estado: 'cancelada' }, { new: true });
        res.status(200).json({ message: 'Reserva cancelada', reserva });
    } catch (error) {
        res.status(500).json({ message: 'Error al cancelar', error });
    }
};