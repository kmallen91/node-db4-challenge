exports.seed = function(knex) {
  // Inserts seed entries
  return knex("recipes-instructions").insert([
    { recipes_id: 1, instructions_id: 1 },
    { recipes_id: 2, instructions_id: 2 },
    { recipes_id: 3, instructions_id: 3 }
  ]);
};
