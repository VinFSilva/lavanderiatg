exports.up = function (knex) {
    return knex.schema.createTable('itens', table => {
        table.increments('id').primary()
        table.integer('numero_pecas').notNull()
        table.integer('peso_total').notNull()
        table.string('observacoes').notNull()
        table.boolean('ativo').notNull()
        table.datetime('createdAt').notNull()
        table.datetime('updatedAt').notNull()
        table.integer('cliente_id').references('id')
            .inTable('cliente').notNull()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('itens')
};