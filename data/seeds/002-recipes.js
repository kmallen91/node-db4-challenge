exports.seed = function(knex) {
  // Inserts seed entries
  return knex("recipes").insert([
    { recipe_name: "cake" },
    { recipe_name: "biscuits" },
    { recipe_name: "pie dough" }
  ]);
};
