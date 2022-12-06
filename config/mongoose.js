const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/shop_developoment');

const db=mongoose.connection;
db.on('error',console.error.bind(console,"Error connection to MongoDb"));

db.once('open',function(){
    console.log('Connect to Database :: MongoDb');
});

module.exports =db;