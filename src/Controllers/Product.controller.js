const Product = require('../Models/Product.model')

var productController = {
  newProduct: async (req, res) => {

    try {
      var product = await Product.findOne({product: req.body.product})

      if(product) throw 'El nombre del producto, existe'

      var newProduct = new Product({
        product: req.body.product,
        price: req.body.price,
        cantity: req.body.cantity,
        total: req.body.cantity * req.body.price,
      })

      await newProduct.save()
      return res.status(201).json({ error: false, message: 'Nuevo producto agregado' })
    }catch( err ){
      return res.status(201).json({ error: true, message: err })
    }
  },

  getProducts: async (req, res) => {

    try{
      var products = await Product.find({})

      return res.status(200).json( { error: false, products } )

    }catch( err ){
       return res.status(500).json( { error: true, message: 'Algo sucedio mal' } )
    }

  },
  updateProduct: async (req, res) => {
    try{
       var product = await Product.findOne({ _id: req.body._id })
       
       if(!product) throw 'No se encontro el producto'

      const updatedProduct = {
        product: product.product || req.body.product,
        price: product.price || req.body.price,
        cantity: product.cantity + req.body.cantity,
        total: product.total +  req.body.cantity * product.price
      }

      await Product.findOneAndUpdate({ _id: product._id }, updatedProduct)

      return res.status(200).json({ error: false, message: 'Cantidad actualizada' })

    }catch( err ){

      res.status(400).json({ error: true, message: err })

    }
  },
}

module.exports = productController 


