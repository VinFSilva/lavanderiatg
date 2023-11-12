exports.up = function(knex) {
    return knex.schema.alterTable('prancha_passar', table => {
        table.dropColumn('numero')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('prancha_passar')
};