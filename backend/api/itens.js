const bcrypt = require('bcrypt')
const moment = require('moment')
module.exports = app => {

    const getHash = (password, callback) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => callback(hash))
        })
    }

    const salva = (req, res) => {

        getHash(req.body.pass, hash => {
            const password = hash

            app.db('itens')
                .insert({
                    numero_pecas: req.body.numero_pecas,
                    peso_total: req.body.peso_total,
                    observacoes: req.body.observacoes,
                    ativo: req.body.ativo,
                    createdAt: moment().format(),
                    updatedAt: moment().format(),
                    cliente_id: req.body.cliente_id

                })
                .then(_ => res.status(201).send())
                .catch(err => res.status(400).json({ message: err, status: "Erro ao cadastrar itens!" }))
        })
    }

    const listar = (req, res) => {
        app.db('itens')
            .select('*')
            .then(este => res.json(este))
            .catch(err => res.json(err))
    }

    const listarUm = async (req, res) => {
        await app.db('itens')
            .where({ id: req.params.id })
            .first()
            .then(user => res.status(200).json(user))
            .catch(err => res.status(400).json(err))
    }

    const update = async (req, res) => {
        await app.db('itens')
            .where({ id: req.params.id })
            .update({
                numero_pecas: req.body.numero_pecas,
                peso_total: req.body.peso_total,
                observacoes: req.body.observacoes,
                ativo: req.body.ativo,
                updatedAt: moment().format(),
                cliente_id: req.body.cliente_id

            })
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
    }

    const deletar = async (req, res) => {
        await app.db('itens')
            .where({ id: req.params.id })
            .delete()
            .then(user => res.json({ user, message: "Itens deletados com sucesso!" }))
            .catch(err => res.status(400).json(err))
    }

    return { salva, listar, listarUm, update, deletar }
}