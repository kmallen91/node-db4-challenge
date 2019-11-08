exports.up = function(knex) {
  return knex.schema.createTable("recipes-instructions", table => {
    table.increments();
    table
      .integer("recipes_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("instructions_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("instructions")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("recipes-instructions");
};
