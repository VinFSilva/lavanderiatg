const bcrypt = require('bcrypt')
module.exports = app => {

    const getHash = (password, callback) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => callback(hash))
        })
    }

    const salva = (req, res) => {

        getHash(req.body.pass, hash => {
            const password = hash

            app.db('cliente')
                .insert({
                    nome: req.body.nome,
                    cpf: req.body.cpf,
                    rg: req.body.rg,
                    data_nascimento: req.body.data_nascimento,
                    telefone: req.body.telefone,
                    email: req.body.email,
                    ativo: req.body.ativo,
                    createdAt: req.body.createdAt,
                    updatedAt: req.body.updatedAt

                })
                .then(_ => res.status(201).send())
                .catch(err => res.status(400).json({ message: err, status: "Erro ao cadastrar cliente!" }))
        })
    }

    const listar = (req, res) => {
        app.db('cliente')
            .select('*')
            .then(este => res.json(este))
            .catch(err => res.json(err))
    }

    const listarUm = async (req, res) => {
        await app.db('cliente')
            .where({ id: req.params.id })
            .first()
            .then(user => res.status(200).json(user))
            .catch(err => res.status(400).json(err))
    }

    const update = async (req, res) => {
        await app.db('cliente')
            .where({ id: req.params.id })
            .update({
                nome: req.body.name,
                rg: req.body.rg,
                telefone: req.body.telefone,
                email: req.body.email,
                ativo: req.body.ativo,
                updatedAt: req.body.updatedAt

            })
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
    }

    const deletar = async (req, res) => {
        await app.db('cliente')
            .where({ id: req.params.id })
            .delete()
            .then(user => res.json({ user, message: "Cliente deletado com sucesso!" }))
            .catch(err => res.status(400).json(err))
    }

    return { salva, listar, listarUm, update, deletar }
}