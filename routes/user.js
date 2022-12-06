const { Router } = require('express');
const express=require('express');
const router=express.Router();
const passport=require('passport');
const UserController=require('../controllers/userController');
router.get('/profile',UserController.profile);
router.get('/log-in',UserController.signIn);
router.get('/sign-up',UserController.signIn);
router.post('/create',UserController.create);
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect: '/users/log-in'},
),UserController.createSession);


module.exports=router;