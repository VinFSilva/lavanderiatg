
exports.up = function (knex) {
    return knex.schema.createTable('secadora', table => {
        table.increments('id').primary()
        table.bigint('numero').notNull()
        table.string('marca').notNull()
        table.string('modelo').notNull()
        table.integer('peso_maximo').notNull()
        table.boolean('ativo').notNull()
        table.datetime('createdAt').notNull()
        table.datetime('updatedAt').notNull()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('secadora')
};
