const { model, Schema } = require('mongoose')

var ProductSchema = new Schema({
  product: { type: 'String' },
  price: { type: 'Number' },
  cantity: { type: 'Number' },
  total: 'Number' 
})

module.exports = model('Product', ProductSchema)
