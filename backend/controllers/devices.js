const { response } = require('express');
const knex = require('../models/connection');

module.exports = {
  async fetchAll(req, res){
        
    const allDevices = await knex('devices')
      .select('*');

    return res.json(allDevices);
    },
  
  async fetchOne(req, res){
    const device = await knex('devices')
      .where('id', req.params.id);
      
    return res.json(device);
  },

  async insertDevice(req, res){
    const { color, partNumber, category_id } = req.body;
    const data = await knex('devices')
      .insert({
        color,
        partNumber,
        category_id
      });

    return res.json(data);
  }
}