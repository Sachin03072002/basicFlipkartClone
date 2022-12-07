const { Router } = require('express');
const express=require('express');
const router=express.Router();
const passport=require('passport');
const UserController=require('../controllers/userController');
router.get('/profile',passport.checkAuthentication,UserController.profile);
router.get('/sign-in',UserController.signIn);
router.get('/sign-up',UserController.signUp);
router.post('/create',UserController.create);
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
),UserController.createSession);
router.get('/sign-out',UserController.destroySession);

module.exports=router;