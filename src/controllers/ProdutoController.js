const Produto = require('../models/Produto');
const Vendedor = require('../models/Vendedor');

async function create (req, res) {
    try {
        const produto = await Produto.create(req.body);
        return res.status(201).json({ message: 'Usuário cadastrado com sucesso', Produto: produto });
    } catch (err) {
        return res.status(500).json({ error: err });
    }
};
async function index (req, res) {
    try {
        const produto = await Produto.findAll();
        return res.status(200).json({ produto });
    } catch (err) {
        return res.status(500).json({ error:err })
    }
};
async function show (req, res) {
    const { id } = req.params;
    try {
        const produto = await Produto.findByPk(id);
        if (produto)
            return res.status(200).json({ produto });
        else
            return res.status(200).json({ message: 'Usuário não encontrado' });
    } catch (err) {
        return res.status(500).json({ error: err })
    }
};

async function update (req, res)  { 
    const {id} = req.params;
    try {
        const updated = await Produto.update(req.body, {where: {id: id}});
        if (updated) {
            const produto = await Produto.findByPk(id);
            res.status(200).send(produto)
        } else
            throw new Error();
    } catch (err) {
        return res.status(500).json({error: err});
    }
};
async function destroy (req, res) { 
    const {id} = req.params;
    try {
        const deleted = await Produto.destroy({where:{id:id}});
        if (deleted) {
            return res.status(200).send('Usuário deletado com sucesso.')
        } else
            throw new Error();
    } catch (err) {
        return res.status(500).json({error:err});
    }
};

async function relVendedorProduto(req, res) {
    const {vendedorId, produtoId} = req.params;
    try {
        const vendedor = await Vendedor.findByPk(vendedorId);
        const produto = await Produto.findByPk(produtoId);
        await produto.setVendedor(vendedor);
        return res.status(200).json(produto);
    } catch (error) {
        return res.status(500).json({error})
    }
};

async function RemoveRelVendedorProduto(req, res) {
    const { produtoId } = req.params;
    try {
        const produto = await Produto.findByPk(produtoId);
        await produto.setVendedor(null);
        return res.status(200).json(produto);
    } catch (error) {
        return res.status(500).json({error})
    }
};

module.exports = {
    create,
    index,
    show,
    update,
    destroy,
    relVendedorProduto,
    RemoveRelVendedorProduto
}