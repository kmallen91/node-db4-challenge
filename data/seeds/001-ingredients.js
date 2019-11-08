exports.seed = function(knex) {
  // Inserts seed entries
  return knex("ingredients").insert([
    { ingredient_name: "butter", unit: "oz" },
    { ingredient_name: "flour", unit: "cup" },
    { ingredient_name: "sugar", unit: "cup" }
  ]);
};
