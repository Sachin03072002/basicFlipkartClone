//acquiring the express
const express=require('express');
const cookieParser=require('cookie-parser');
//making the app to use epress
const app=express();
//selecting the port
const port=8000;
const expressLayouts = require('express-ejs-layouts');
const db=require('./config/mongoose');
const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local-stratergy');
//getting the url
app.use(express.urlencoded());
app.use(cookieParser());
//setting the stationary files
app.use(express.static('./assets'));
app.use(expressLayouts);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');
// setting up the routes

app.use(session({
    name:'Flipkart',
    secret: 'allthebest',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000 *60*100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', require('./routes'));
// //listening to the port
app.listen(port,function(err){
    if(err){
        console.log(`Error in loading the page: ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
});