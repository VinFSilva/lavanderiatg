module.exports = app => {
    app.post('/signup', app.api.users.salva)
    app.post('/signin', app.api.auth.signin,)

    app.route('/users')
        //.all(app.config.passport.authenticate())
        .get(app.api.users.listar)

    app.route('/users/:id')
        //.all(app.config.passport.authenticate())
        .get(app.api.users.listarUm)
        .put(app.api.users.update)
        .delete(app.api.users.deletar)

    app.route('/cliente')
        //.all(app.config.passport.authenticate())
        .post(app.api.cliente.salva)
        .get(app.api.cliente.listar)

    app.route('/cliente/:id')
        //.all(app.config.passport.authenticate())
        .get(app.api.cliente.listarUm)
        .put(app.api.cliente.update)
        .delete(app.api.cliente.deletar)


    app.route('/endereco')
        //.all(app.config.passport.authenticate())
        .post(app.api.endereco.salva)
        .get(app.api.endereco.listar)

    app.route('/endereco/:id')
        //.all(app.config.passport.authenticate())
        .get(app.api.endereco.listarUm)
        .put(app.api.endereco.update)
        .delete(app.api.endereco.deletar)


    app.route('/funcionario')
        //.all(app.config.passport.authenticate())
        .post(app.api.funcionario.salva)
        .get(app.api.funcionario.listar)

    app.route('/funcionario/:id')
        //.all(app.config.passport.authenticate())
        .get(app.api.funcionario.listarUm)
        .put(app.api.funcionario.update)
        .delete(app.api.funcionario.deletar)


    app.route('/itens')
        //.all(app.config.passport.authenticate())
        .post(app.api.itens.salva)
        .get(app.api.itens.listar)

    app.route('/itens/:id')
        //.all(app.config.passport.authenticate())
        .get(app.api.itens.listarUm)
        .put(app.api.itens.update)
        .delete(app.api.itens.deletar)


    app.route('/maquina_lavar')
        //.all(app.config.passport.authenticate())
        .post(app.api.maquina_lavar.salva)
        .get(app.api.maquina_lavar.listar)

    app.route('/maquina_lavar/:id')
        //.all(app.config.passport.authenticate())
        .get(app.api.maquina_lavar.listarUm)
        .put(app.api.maquina_lavar.update)
        .delete(app.api.maquina_lavar.deletar)


    app.route('/prancha_passar')
        //.all(app.config.passport.authenticate())
        .post(app.api.prancha_passar.salva)
        .get(app.api.prancha_passar.listar)

    app.route('/prancha_passar/:id')
        //.all(app.config.passport.authenticate())
        .get(app.api.prancha_passar.listarUm)
        .put(app.api.prancha_passar.update)
        .delete(app.api.prancha_passar.deletar)


    app.route('/secadora')
        //.all(app.config.passport.authenticate())
        .post(app.api.secadora.salva)
        .get(app.api.secadora.listar)

    app.route('/secadora/:id')
        //.all(app.config.passport.authenticate())
        .get(app.api.secadora.listarUm)
        .put(app.api.secadora.update)
        .delete(app.api.secadora.deletar)


    app.route('/pedido')
        //.all(app.config.passport.authenticate())
        .post(app.api.pedido.salva)
        .get(app.api.pedido.listar)

    app.route('/pedido/:id')
        //.all(app.config.passport.authenticate())
        .get(app.api.pedido.listarUm)
        .put(app.api.pedido.update)
        .delete(app.api.pedido.deletar)
}

