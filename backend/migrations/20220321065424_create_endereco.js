exports.up = function (knex) {
    return knex.schema.createTable('endereco', table => {
        table.increments('id').primary()
        table.string('rua').notNull()
        table.string('numero').notNull()
        table.string('bairro').notNull()
        table.string('cidade').notNull()
        table.string('estado').notNull()
        table.boolean('ativo').notNull()
        table.datetime('createdAt').notNull()
        table.datetime('updatedAt').notNull()
        table.integer('cliente_id').references('id')
            .inTable('cliente').notNull()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('endereco')
};
