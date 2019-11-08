const db = require("../data/dbConfig");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList() {
  // select i.ingredients_name, recipe.recipe_name, ri.quantity from recipes-ingredients as ri
  // join ingredients as i on ri.ingredients_id = i.id
  // join recipes as r on ri.recipes_id = r.id
  db("recipes-ingredients as ri")
    .join("ingredients as i", "ri.ingredient_id", "i.id")
    .join("recipes as r", "ri.recipe_id", "r.id")
    .select(
      "i.ingredient_name as Ingredients",
      "ri.quantity as Quantity",
      "i.unit as Units"
    );
}

function getInstructions() {
  // select instructions.instructions, recipe.recipe_name from recipes-instructions as rin
  // join instructions as in on rin.instructions_id = in.id
  // join recipes as r on rin.recipes_id = r.id
  db("recipes-instructions as rin")
    .join("instructions as in", "rin.instructions_id", "in.id")
    .join("recipes as r", "ri.recipes_id", "r.id")
    .select("i.instructions as Instructions");
}
