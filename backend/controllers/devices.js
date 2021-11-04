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
  }

}