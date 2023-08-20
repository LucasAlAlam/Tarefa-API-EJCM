const Contato = require('../models/Contato');
const Usuario = require('../models/Usuario');

async function create (req, res) {
    try {
        const contato = await Contato.create(req.body);
        return res.status(201).json({ message: 'Contato cadastrado com sucesso', Contato: contato });
    } catch (err) {
        return res.status(500).json({ error: err });
    }
};
const index = async (req, res) => {
    try {
        const contato = await Contato.findAll();
        return res.status(200).json({ contato });
    } catch (err) {
        return res.status(500).json({ error:err })
    }
};
const show = async (req, res) => {
    const { id } = req.params;
    try {
        const contato = await Contato.findByPk(id);
        if (contato)
            return res.status(200).json({ contato });
        else
            return res.status(200).json({ message: 'Contato não encontrado' });
    } catch (err) {
        return res.status(500).json({ error: err })
    }
};

const update = async (req, res) => { 
    const {id} = req.params;
    try {
        const [updated] = await Contato.update(req.body, {where: {id: id}});
        if (updated) {
            const contato = await Contato.findByPk(id);
            return res.status(200).send(contato);
        } else
            throw new Error();
    } catch (err) {
        return res.status(500).json({error: err});
    }
};
const destroy = async (req, res) => { 
    const {id} = req.params;
    try {
        const deleted = await Contato.destroy({where:{id:id}});
        if (deleted) {
            return res.status(200).send('Contato deletado com sucesso.')
        } else
            throw new Error();
    } catch (err) {
        return res.status(500).json({error:err});
    }
};

async function relUserContato(req, res) {
    const {usuarioId, contatoId} = req.params;
    try {
        const usuario = await Usuario.findByPk(usuarioId);
        const contato = await Contato.findByPk(contatoId);
        await contato.setUsuario(usuario);
        return res.status(200).json(contato);
    } catch (error) {
        return res.status(500).json({error})
    }
}

module.exports = {
    create,
    index,
    show,
    update,
    destroy,
    relUserContato
}