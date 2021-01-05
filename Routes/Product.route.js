const express = require('express')
const {newProduct, getProducts, updateProduct} = require('../Controllers/Product.controller')

const router = express.Router()

//metodo de agregar nuevo producto
router.post('/new', newProduct)

//obtener todos los productos
router.get('/all', getProducts)

// actualizar una cantidad
router.put('/new-cantity', updateProduct)

module.exports = router
