const { response } = require('express');
const knex = require('../models/connection');

module.exports = {
  async fetchAll(req, res){
        
    const allDevices = await knex('categories')
      .select('*');

    return res.json(allDevices);
    }


}