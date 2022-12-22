const Product = require('../models/product.js')

async function index(req, res, next) {
  const products = await Product.find({})
  res.render('pages/menu/index', { title: 'Foodyar || Menu', products })
}

module.exports = { index }
