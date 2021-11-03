exports.up = function(knex) {
    return knex.schema.createTable('devices', function(table){
      table.increments("id");
      table.string("color", 16).notNullable();
      table.integer("partNumber").notNullable();
      table.integer("category_id").unsigned().references('id').inTable('categories');
      });
    };
    
    exports.down = function(knex) {
      return knex.schema.dropTableIfExists('devices');
    };
  