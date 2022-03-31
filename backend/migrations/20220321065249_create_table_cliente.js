
exports.up = function (knex) {
    return knex.schema.createTable('cliente', table => {
        table.increments('id').primary()
        table.string('nome').notNull()
        table.string('cpf').notNull().unique()
        table.string('rg').notNull()
        table.date('data_nascimento').notNull()
        table.string('telefone').notNull()
        table.string('email').notNull()
        table.boolean('ativo').notNull()
        table.datetime('createdAt').notNull()
        table.datetime('updatedAt').notNull()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('cliente')
};
