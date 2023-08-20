const modelUsuario = require('../models/Usuario');

async function create (req, res) {
    try {
        const user = await modelUsuario.create(req.body);
        return res.status(201).json({ message: 'Usuário cadastrado com sucesso', user: user });
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
const index = async (req, res) => {
    try {
        const user = await modelUsuario.findAll();
        return res.status(200).json({ user });
    } catch {
        return res.status(500).json({ error:err })
    }
};
const show = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await modelUsuario.findByPk(id);
        if (user)
            return res.status(200).json({ user });
        else
            return res.status(200).json({ message: 'Usuário não encontrado' });
    } catch {
        return res.status(500).json({ error: err })
    }
};

const update = async (req, res) => { 
    const {id} = req.params;
    try {
        const updated = await modelUsuario.update(req.body, {where: {id: id}});
        if (updated) {
            const user = await modelUsuario.findByPk(id);
            res.status(200).send(user)
        } else
            throw new Error();
    } catch (err) {
        return res.status(500).json({error: err});
    }
};
const destroy = async (req, res) => { 
    const {id} = req.params;
    try {
        const deleted = await modelUsuario.destroy({where:{id:id}});
        if (deleted) {
            return res.status(200).send('Usuário deletado com sucesso.')
        } else
            throw new Error();
    } catch (error) {
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