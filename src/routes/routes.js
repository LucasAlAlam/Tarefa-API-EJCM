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
router.put('/vendedor/:vendedorId/produto/:produtoId', produtoController.relVendedorProduto)
router.get('/produto', produtoController.index);
router.get('/produto/:id', produtoController.show);
router.put('/produto/:id', produtoController.update);
router.delete('/produto/:id', produtoController.destroy);
router.put('/produto/remove_vendedor/:produtoId', produtoController.RemoveRelVendedorProduto);

const contatoController = require ('../controllers/ContatoController')

router.post('/contato', contatoController.create);
router.get('/contato', contatoController.index);
router.get('/contato/:id', contatoController.show);
router.put('/contato/:id', contatoController.update);
router.delete('/contato/:id', contatoController.destroy);
router.put('/usuario/:usuarioId/contato/:contatoId', contatoController.relUserContato);

const clienteController = require ('../controllers/ClienteController')

router.post('/cliente', clienteController.create);
router.get('/cliente', clienteController.index);
router.get('/cliente/:id', clienteController.show);
router.put('/cliente/:id', clienteController.update);
router.delete('/cliente/:id', clienteController.destroy);
router.put('/usuario/:usuarioId/cliente/:clienteId', clienteController.relClienteUsuario);
router.put('/Deseja/:clienteId/:produtoId/', clienteController.addCarrinho);
router.put('/cliente/:clienteId/compra/produto/:produtoId', clienteController.compra);

const vendedorController = require ('../controllers/VendedorController')

router.post('/vendedor', vendedorController.create);
router.get('/vendedor', vendedorController.index);
router.get('/vendedor/:id', vendedorController.show);
router.put('/vendedor/:id', vendedorController.update);
router.delete('/vendedor/:id', vendedorController.destroy);
router.put('/usuario/:usuarioId/vendedor/:vendedorId', vendedorController.relVendedorUsuario);

module.exports = router;