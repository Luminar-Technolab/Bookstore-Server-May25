const express = require('express')
const userController = require('../controllers/userController')
const bookController = require('../controllers/bookController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const multerConfig = require('../middlewares/imageMulterMiddleware')

const router = express.Router()

//register
router.post('/register',userController.registerController)
//login
router.post('/login',userController.loginController)
//google login
router.post('/google-login',userController.googleLoginController)
//home-books
router.get('/home-books',bookController.getHomeBooksController)
//add-book
router.post('/add-book',jwtMiddleware,multerConfig.array('uploadImges',3),bookController.addBookController)
//all-books
router.get('/all-books',jwtMiddleware,bookController.getAllBooksController)
//view-book
router.get('/books/:id/view',jwtMiddleware,bookController.viewBookController)

module.exports = router