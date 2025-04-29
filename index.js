require('dotenv').config();

const server = require('./server');
const db = require('./database/models');

const PORT = process.env.PORT || 8080;

// Testear conexión antes de levantar el servidor
db.sequelize.authenticate()
  .then(() => {
    console.log('✅ Conectado a la base de datos exitosamente.');

    server.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`));
  })
  .catch(err => {
    console.error('❌ Error al conectar a la base de datos:', err);
  });
