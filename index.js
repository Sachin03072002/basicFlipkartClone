//acquiring the express
const express=require('express');
//making the app to use epress
const app=express();
//selecting the port
const port=8000;


const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
const passport=require('passport');
// const passportLocal=require('./config/passport_layout_stratergy');
//requiring the saa middleware
const sassMiddleware=require('node-sass-middleware');
//getting the url
app.use(express.urlencoded());
//setting the stationary files
app.use(express.static('./assets'));
//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');
// setting up the routes
app.use('/', require('./routes'));
// //listening to the port
app.listen(port,function(err){
    if(err){
        console.log(`Error in loading the page: ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
});