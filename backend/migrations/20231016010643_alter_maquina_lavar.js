exports.up = function(knex) {
    return knex.schema.alterTable('maquina_lavar', table => {
        table.dropColumn('numero')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('maquina_lavar')
};