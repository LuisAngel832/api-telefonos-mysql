const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'));

router.post('/phones', controllers.createPhone);
router.get('/phones', controllers.getAllPhones);
router.put('/phones/:id', controllers.updatePhone); // (por si aún no está)
router.delete('/phones/:id', controllers.deletePhone); // <-- NUEVO

module.exports = router;
