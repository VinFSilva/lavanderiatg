exports.up = function (knex) {
    return knex.schema.createTable('pedido', table => {
        table.increments('id').primary()
        table.integer('numero').notNull()
        table.datetime('data_coleta').notNull()
        table.datetime('data_entrega').notNull()
        table.datetime('finalizado')
        table.boolean('aberto').notNull()
        table.integer('numero_pecas').notNull()
        table.integer('peso_total').notNull()
        table.string('observacoes').notNull()
        table.datetime('createdAt').notNull()
        table.datetime('updatedAt').notNull()
        table.integer('cliente_id').references('id')
            .inTable('cliente').notNull()
        table.integer('maquina_lavar_id').references('id')
            .inTable('maquina_lavar').notNull()
        table.integer('secadora_id').references('id')
            .inTable('secadora').notNull()
        table.integer('prancha_passar_id').references('id')
            .inTable('prancha_passar').notNull()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('pedido')
};