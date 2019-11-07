exports.up = function(knex) {
  return knex.schema.createTable("recipes", table => {
    table.increments();
    table.string("recipe_name", 255).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("recipes");
};
