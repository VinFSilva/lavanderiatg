const bcrypt = require('bcrypt')
module.exports = app => {

    const getHash = (password, callback) => {
        bcrypt.genSalt(10, (err, salt) => {
            console.log(password, 'salt é:', salt)
            bcrypt.hash(password, salt, (err, hash) => callback(hash))
        })
    }

    const salva = (req, res) => {

        getHash(req.body.password, hash => {
            const password = hash

            app.db('users')
                .insert({
                    name: req.body.name,
                    email: req.body.email,
                    password: password,
                })
                .then(_ => res.status(201).send())
                .catch(err => res.status(400).json({ message: err, status: "Erro ao cadastrar usuário!" }))
        })
    }

    const listar = (req, res) => {
        app.db('users')
            .select('*')
            .then(este => res.json(este))
            .catch(err => res.json(err))
    }
    const listarUm = async (req, res) => {
        await app.db('users')
            .where({ id: req.params.id })
            .first()
            .then(user => res.status(200).json(user))
            .catch(err => res.status(400).json(err))
    }

    const update = async (req, res) => {
        await app.db('users')
            .where({ id: req.params.id })
            .update({
                name: req.body.name,
                email: req.body.email

            })
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
    }

    const deletar = async (req, res) => {
        await app.db('users')
            .where({ id: req.params.id })
            .delete()
            .then(user => res.json({ user, message: "Usuário deletado com sucesso!" }))
            .catch(err => res.status(400).json(err))
    }

    return { salva, listar, listarUm, update, deletar }
}