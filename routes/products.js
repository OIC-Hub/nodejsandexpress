const router = require('express').Router()
const path = require('path')
let products=[]
router.get('/products', (req, res, next)=>{
//   res.sendFile(path.join(__dirname, '../', 'views', 'products.html'));
 res.render('products', {product:products})
})
router.get('/add-products', (req, res, next)=>{
    res.sendFile(path.join(__dirname, '../', 'views', 'addProduct.html'));
  })
router.post('/add-product', (req, res, next)=>{
    // let title = req.body.title
    // let img = req.body.image
    // console.log(title, img)
    products.push(req.body)
  res.redirect('/products')
} )
module.exports=router