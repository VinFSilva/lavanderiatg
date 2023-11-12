
exports.up = function(knex) {
    return knex.schema.alterTable('pedido', table => {
        table.dropColumn('numero')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('pedido')
};
