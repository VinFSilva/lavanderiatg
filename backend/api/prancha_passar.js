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

            app.db('prancha_passar')
                .insert({
                    numero: req.body.numero,
                    marca: req.body.marca,
                    modelo: req.body.modelo,
                    ativo: true,
                    createdAt: moment().format(),
                    updatedAt: moment().format()

                })
                .then(_ => res.status(201).send())
                .catch(err => res.status(400).json({ message: err, status: "Erro ao cadastrar prancha de passar!" }))
        })
    }

    const listar = (req, res) => {
        app.db('prancha_passar')
            .select('*')
            .then(este => res.json(este))
            .catch(err => res.json(err))
    }

    const listarUm = async (req, res) => {
        await app.db('prancha_passar')
            .where({ id: req.params.id })
            .first()
            .then(user => res.status(200).json(user))
            .catch(err => res.status(400).json(err))
    }

    const update = async (req, res) => {
        await app.db('prancha_passar')
            .where({ id: req.params.id })
            .update({
                numero: req.body.numero,
                marca: req.body.marca,
                modelo: req.body.modelo,
                ativo: true,
                updatedAt: moment().format()

            })
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
    }

    const deletar = async (req, res) => {
        await app.db('prancha_passar')
            .where({ id: req.params.id })
            .delete()
            .then(user => res.json({ user, message: "Prancha de passar deletada com sucesso!" }))
            .catch(err => res.status(400).json(err))
    }

    return { salva, listar, listarUm, update, deletar }
}