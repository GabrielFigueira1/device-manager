const knex = require('../models/connection');

module.exports = {
  async fetchAll(req, res){
        
    const allCategorys = await knex('categories')
      .select('*');

    return res.json(allCategorys);
    },

  async insertCategory(req, res){
    const { color, partNumber, category_id } = req.body;
    const data = await knex('devices')
      .insert({
        color,
        partNumber,
        category_id
      });

    return res.json(data);
  },

  async deleteCategory(req, res){
    const device = await knex('devices')
    .where('id', req.params.id).del();

    return res.json(device);
  }
}