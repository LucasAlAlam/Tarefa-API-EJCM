const modelProduto = require('../models/Produto');

async function create (req, res) {
    try {
        const produto = await modelProduto.create(req.body);
        return res.status(201).json({ message: 'Usuário cadastrado com sucesso', modelProduto: produto });
    } catch (err) {
        return res.status(500).json({ error: err });
    }
};
async function index (req, res) {
    try {
        const produto = await modelProduto.findAll();
        return res.status(200).json({ produto });
    } catch (err) {
        return res.status(500).json({ error:err })
    }
};
async function show (req, res) {
    const { id } = req.params;
    try {
        const produto = await modelProduto.findByPk(id);
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
        const updated = await modelProduto.update(req.body, {where: {id: id}});
        if (updated) {
            const produto = await modelProduto.findByPk(id);
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
        const deleted = await modelProduto.destroy({where:{id:id}});
        if (deleted) {
            return res.status(200).send('Usuário deletado com sucesso.')
        } else
            throw new Error();
    } catch (err) {
        return res.status(500).json({error:err});
    }
};

module.exports = {
    create,
    index,
    show,
    update,
    destroy
}