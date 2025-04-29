const { Router } = require('express');
const models = require('../database/models');
const router = Router();

router.get('/test-db', async (req, res) => {
  try {
    await models.sequelize.authenticate();
    res.status(200).json({ message: '✅ Conexión a la base exitosa' });
  } catch (err) {
    res.status(500).json({ message: '❌ Error al conectar a la base', error: err.message });
  }
});

module.exports = router;
