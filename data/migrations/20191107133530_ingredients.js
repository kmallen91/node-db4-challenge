exports.up = function(knex) {
  return knex.schema.createTable("ingredients", table => {
    table.increments();
    table
      .string("ingredient_name", 255)
      .unique()
      .notNullable();
    table.string("unit", 128);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("ingredients");
};
