exports.seed = function(knex) {
  // Inserts seed entries
  return knex("instructions").insert([
    {
      instructions:
        "Cream butter and sugar until pale yellow, then mix in flour. Mould and bake."
    },
    {
      instructions:
        "Cream butter and sugar until pale yellow, then mix in flour. Mould and bake."
    },
    {
      instructions:
        "Cream butter and sugar until pale yellow, then mix in flour. Mould and bake."
    }
  ]);
};
