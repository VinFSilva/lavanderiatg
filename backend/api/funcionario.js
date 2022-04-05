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

            app.db('funcionario')
                .insert({
                    nome: req.body.nome,
                    cpf: req.body.cpf,
                    rg: req.body.rg,
                    data_nascimento: req.body.data_nascimento,
                    telefone: req.body.telefone,
                    email: req.body.email,
                    cargo: req.body.cargo,
                    salario: req.body.salario,
                    ativo: req.body.ativo,
                    createdAt: req.body.createdAt,
                    updatedAt: req.body.updatedAt

                })
                .then(_ => res.status(201).send())
                .catch(err => res.status(400).json({ message: err, status: "Erro ao cadastrar funcionario!" }))
        })
    }

    const listar = (req, res) => {
        app.db('funcionario')
            .select('*')
            .then(este => res.json(este))
            .catch(err => res.json(err))
    }

    const listarUm = async (req, res) => {
        await app.db('funcionario')
            .where({ id: req.params.id })
            .first()
            .then(user => res.status(200).json(user))
            .catch(err => res.status(400).json(err))
    }

    const update = async (req, res) => {
        await app.db('funcionario')
            .where({ id: req.params.id })
            .update({
                nome: req.body.nome,
                cpf: req.body.cpf,
                rg: req.body.rg,
                data_nascimento: req.body.data_nascimento,
                telefone: req.body.telefone,
                email: req.body.email,
                cargo: req.body.cargo,
                salario: req.body.salario,
                ativo: req.body.ativo,
                updatedAt: req.body.updatedAt

            })
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
    }

    const deletar = async (req, res) => {
        await app.db('funcionario')
            .where({ id: req.params.id })
            .deletar()
            .then(user => res.json({ user, message: "Funcionario deletado com sucesso!" }))
            .catch(err => res.status(400).json(err))
    }

    return { salva, listar, listarUm, update, deletar }
}