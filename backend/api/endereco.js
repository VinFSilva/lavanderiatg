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

            app.db('endereco')
                .insert({
                    rua: req.body.rua,
                    numero: req.body.numero,
                    bairro: req.body.bairro,
                    cidade: req.body.cidade,
                    estado: req.body.estado,
                    ativo: req.body.ativo,
                    createdAt: req.body.createdAt,
                    updatedAt: req.body.updatedAt,
                    cliente_id: req.body.cliente_id


                })
                .then(_ => res.status(201).send())
                .catch(err => res.status(400).json({ message: err, status: "Erro ao cadastrar endereço!" }))
        })
    }


    const listarUm = async (req, res) => {
        await app.db('endereco')
            .where({ id: req.params.id })
            .first()
            .then(user => res.status(200).json(user))
            .catch(err => res.status(400).json(err))
    }

    const update = async (req, res) => {
        await app.db('endereco')
            .where({ id: req.params.id })
            .update({
                rua: req.body.rua,
                numero: req.body.numero,
                bairro: req.body.bairro,
                cidade: req.body.cidade,
                estado: req.body.estado,
                ativo: req.body.ativo,
                updatedAt: req.body.updatedAt

            })
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
    }

    const deletar = async (req, res) => {
        await app.db('endereco')
            .where({ id: req.params.id })
            .deletar()
            .then(user => res.json({ user, message: "Endereço de passar deletado com sucesso!" }))
            .catch(err => res.status(400).json(err))
    }

    return { salva, listarUm, update, deletar }
}