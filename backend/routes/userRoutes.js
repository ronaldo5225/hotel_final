const express = require('express');
const router = express.Router();
const User = require('../models/User');

// REGISTRO
router.post('/register', async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    const existe = await User.findOne({ email });
    if (existe) return res.status(400).json({ error: 'Este email ya está registrado' });

    const nuevoUsuario = new User({ nombre, email, password });
    await nuevoUsuario.save();

    res.status(201).json({ mensaje: 'Usuario creado', usuario: { nombre, email } });
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
});

// LOGIN
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const usuario = await User.findOne({ email, password });
    if (!usuario) return res.status(401).json({ error: 'Email o contraseña incorrectos' });

    res.json({ mensaje: 'Login exitoso', usuario: { nombre: usuario.nombre, email: usuario.email } });
  } catch (error) {
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
});

module.exports = router;