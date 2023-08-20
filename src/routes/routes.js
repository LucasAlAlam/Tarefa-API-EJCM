const { Router } = require('express');
const router = Router();

const usuarioController = require ('../controllers/UsuarioController')

router.post('/usuario', usuarioController.create);
router.get('/usuario', usuarioController.index);
router.get('/usuario/:id', usuarioController.show);
router.put('/usuario', usuarioController.update);
router.delete('/usuario', usuarioController.destroy);

module.exports = router;