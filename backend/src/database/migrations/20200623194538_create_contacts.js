exports.up = function(knex) {
 return knex.schema.createTable('contacts', function (table) {
   table.increments();
   table.string('name').notNullable();
   table.string('description').notNullable();
   table.string('image').notNullable();
   table.string('email').notNullable();
   table.string('empresa').notNullable();
   table.string('telefone').notNullable();
  }) 
};

exports.down = function(knex) {
  return knex.schema.dropTable('contacts');
};
