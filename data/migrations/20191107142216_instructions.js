exports.up = function(knex) {
  return knex.schema.createTable("instructions", table => {
    table.increments();
    table.string("instructions", 1028).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("instructions");
};
