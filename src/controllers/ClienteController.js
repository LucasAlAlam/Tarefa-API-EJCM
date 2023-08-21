const Cliente = require('../models/Cliente');
const Compra = require('../models/Compra');
const Produto = require('../models/Produto');
const Usuario = require('../models/Usuario');

async function create (req, res) {
    try {
        const cliente = await Cliente.create(req.body);
        return res.status(201).json({ message: 'Cliente cadastrado com sucesso', Cliente: cliente });
    } catch (err) {
        return res.status(500).json({ error: err });
    }
};
const index = async (req, res) => {
    try {
        const cliente = await Cliente.findAll();
        return res.status(200).json({ cliente });
    } catch (err) {
        return res.status(500).json({ error:err })
    }
};
const show = async (req, res) => {
    const { id } = req.params;
    try {
        const cliente = await Cliente.findByPk(id);
        if (cliente)
            return res.status(200).json({ cliente });
        else
            return res.status(200).json({ message: 'Cliente não encontrado' });
    } catch (err) {
        return res.status(500).json({ error: err })
    }
};

const update = async (req, res) => { 
    const {id} = req.params;
    try {
        const [updated] = await Cliente.update(req.body, {where: {id: id}});
        if (updated) {
            const cliente = await Cliente.findByPk(id);
            return res.status(200).send(cliente);
        } else
            throw new Error();
    } catch (err) {
        return res.status(500).json({error: err});
    }
};
const destroy = async (req, res) => { 
    const {id} = req.params;
    try {
        const deleted = await Cliente.destroy({where:{id:id}});
        if (deleted) {
            return res.status(200).send('Cliente deletado com sucesso.')
        } else
            throw new Error();
    } catch (err) {
        return res.status(500).json({error:err});
    }
};

async function relClienteUsuario(req, res) {
    const {usuarioId, clienteId} = req.params;
    console.log(usuarioId, clienteId)
    try {
        const usuario = await Usuario.findByPk(usuarioId);
        const cliente = await Cliente.findByPk(clienteId);
        await cliente.setUsuario(usuario);
        return res.status(200).json(cliente);
    } catch (error) {
        return res.status(500).json({error})
    }
}

const addCarrinho = async (req,res) => {
    const {clienteId, produtoId} = req.params;
    try {
        const cliente = await Cliente.findByPk(clienteId);
        const produto = await Produto.findByPk(produtoId);
        await cliente.addDesejo(produto);
        return res.status(200).json(cliente)
    } catch (error) {

        return res.status(500).json({message: "Not Favorited"});
    }
}

async function compra(req, res) {
    const {clienteId, produtoId} = req.params;
    try {
        const cliente = await Cliente.findByPk(clienteId);
        const produto = await Produto.findByPk(produtoId);
        await cliente.addComprou(produto);
        return res.status(200).json(cliente);
        //console.log(req.body.chaveAcessoNFE);
        // await Compra.update(req.body.chaveAcessoNFE, {as: 'row', where: {idCliente: clienteId, idProduto: produtoId, desc, row: 1}});
    } catch (error) {

        return res.status(500).json({error});
    }
}

module.exports = {
    create,
    index,
    show,
    update,
    destroy,
    relClienteUsuario,
    addCarrinho,
    compra
}