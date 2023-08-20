const { Router } = require('express');
const router = Router();

const usuarioController = require ('../controllers/UsuarioController')

router.post('/usuario', usuarioController.create);
router.get('/usuario', usuarioController.index);
router.get('/usuario/:id', usuarioController.show);
router.put('/usuario/:id', usuarioController.update);
router.delete('/usuario/:id', usuarioController.destroy);

const produtoController = require ('../controllers/ProdutoController')

router.post('/produto', produtoController.create);
router.get('/produto', produtoController.index);
router.get('/produto/:id', produtoController.show);
router.put('/produto/:id', produtoController.update);
router.delete('/produto/:id', produtoController.destroy);

module.exports = router;