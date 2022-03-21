exports.up = function (knex) {
    return knex.schema.createTable('prancha_passar', table => {
        table.increments('id').primary()
        table.bigint('numero').notNull()
        table.string('marca').notNull()
        table.string('modelo').notNull()
        table.boolean('ativo').notNull()
        table.datetime('createdAt').notNull()
        table.datetime('updatedAt').notNull()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('prancha_passar')
};
