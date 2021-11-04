const knex = require('../models/connection');

module.exports = {
  async fetchAll(req, res){
        
    const allCategorys = await knex('categories')
      .select('*');

    return res.json(allCategorys);
    },

  async insertCategory(req, res){
    const { name } = req.body;
    const data = await knex('categories')
      .insert({
        name
      });

    return res.json(data);
  },

  async deleteCategory(req, res){
    const category = await knex('categories')
    .where('id', req.params.id).del();

    return res.json(category);
  }
}