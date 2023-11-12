exports.up = function(knex) {
    return knex.schema.alterTable('secadora', table => {
        table.dropColumn('numero')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('secadora')
};