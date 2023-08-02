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

            app.db('pedido')
                .insert({
                    data_coleta: req.body.data_coleta,
                    data_entrega: req.body.data_entrega,
                    finalizado: req.body.finalizado,
                    aberto: req.body.aberto,
                    numero_pecas: req.body.numero_pecas,
                    peso_total: req.body.peso_total,
                    observacoes: req.body.observacoes,
                    createdAt: moment().format(),
                    updatedAt: moment().format(),
                    cliente_id: req.body.cliente_id,
                    item_id: req.body.item_id,
                    maquina_lavar_id: req.body.maquina_lavar_id,
                    secadora_id: req.body.secadora_id,
                    prancha_passar_id: req.body.prancha_passar_id

                })
                .then(_ => res.status(201).send())
                .catch(err => res.status(400).json({ message: err, status: "Erro ao cadastrar pedido!" }))
        })
    }

    const listar = (req, res) => {
        app.db('pedido')
            .select('*')
            .then(este => res.json(este))
            .catch(err => res.json(err))
    }

    const listarUm = async (req, res) => {
        console.log("Listing order")
        await app.db('pedido')
            .select('*')
            .where({ id: req.params.id })
            .first()
            .then(user => res.status(200).json(user))
            .catch(err => res.status(400).json(err))
    }

    const update = async (req, res) => {
        await app.db('pedido')
            .where({ id: req.params.id })
            .update({
                data_coleta: req.body.data_coleta,
                data_entrega: req.body.data_entrega,
                finalizado: req.body.finalizado,
                aberto: req.body.aberto,
                numero_pecas: req.body.numero_pecas,
                peso_total: req.body.peso_total,
                observacoes: req.body.observacoes,
                updatedAt: moment().format(),
                cliente_id: req.body.cliente_id,
                itens_id: req.body.itens_id,
                maquina_lavar_id: req.body.maquina_lavar_id,
                secadora_id: req.body.secadora_id,
                prancha_passar_id: req.body.prancha_secar_id

            })
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
    }

    const deletar = async (req, res) => {
        await app.db('pedido')
            .where({ id: req.params.id })
            .delete()
            .then(user => res.json({ user, message: "Pedido deletado com sucesso!" }))
            .catch(err => res.status(400).json(err))
    }

    return { salva, listar, listarUm, update, deletar }
}