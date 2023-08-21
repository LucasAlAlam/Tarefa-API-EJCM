const Vendedor = require('../models/Vendedor');
const Usuario = require('../models/Usuario');

async function create (req, res) {
    try {
        const vendedor = await Vendedor.create(req.body);
        return res.status(201).json({ message: 'Vendedor cadastrado com sucesso', Vendedor: vendedor });
    } catch (err) {
        return res.status(500).json({ error: err });
    }
};
const index = async (req, res) => {
    try {
        const vendedor = await Vendedor.findAll();
        return res.status(200).json({ vendedor });
    } catch (err) {
        return res.status(500).json({ error:err })
    }
};
const show = async (req, res) => {
    const { id } = req.params;
    try {
        const vendedor = await Vendedor.findByPk(id);
        if (vendedor)
            return res.status(200).json({ vendedor });
        else
            return res.status(200).json({ message: 'Vendedor não encontrado' });
    } catch (err) {
        return res.status(500).json({ error: err })
    }
};

const update = async (req, res) => { 
    const {id} = req.params;
    try {
        const [updated] = await Vendedor.update(req.body, {where: {id: id}});
        if (updated) {
            const vendedor = await Vendedor.findByPk(id);
            return res.status(200).send(vendedor);
        } else
            throw new Error();
    } catch (err) {
        return res.status(500).json({error: err});
    }
};
const destroy = async (req, res) => { 
    const {id} = req.params;
    try {
        const deleted = await Vendedor.destroy({where:{id:id}});
        if (deleted) {
            return res.status(200).send('Vendedor deletado com sucesso.')
        } else
            throw new Error();
    } catch (err) {
        return res.status(500).json({error:err});
    }
};

async function relVendedorUsuario(req, res) {
    const {usuarioId, vendedorId} = req.params;
    try {
        const usuario = await Usuario.findByPk(usuarioId);
        const vendedor = await Vendedor.findByPk(vendedorId);
        await vendedor.setUsuario(usuario);
        return res.status(200).json(vendedor);
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
    relVendedorUsuario
}