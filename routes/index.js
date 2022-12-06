//setting up the basic requirements
const express=require('express');
const router=express.Router();
//setting the controllers
const homeController=require('../controllers/homeController');
console.log('router loaded');



router.get('/', homeController.home);








module.exports = router;