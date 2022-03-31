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

            app.db('users')
                .insert({
                    name: req.body.name,
                    email: req.body.email,
                    pass: password,
                })
                .then(_ => res.status(201).send())
                .catch(err => res.status(400).json({ message: err, status: "Erro ao cadastrar usuário!" }))
        })
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
            .deletar()
            .then(user => res.json({ user, message: "Usuário deletado com sucesso!" }))
            .catch(err => res.status(400).json(err))
    }

    return { salva, listarUm, update, deletar }
}
