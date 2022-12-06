const User=require('../models/user');
module.exports.profile = function(req,res){
    return res.render('user_profile',{
        title:'user_profile'
    });
}
//render the log in page
module.exports.signUp=function(req,res){
    res.render('log-in',{
        title:"shop | Log-in"
    });
}
//render the sign in page
module.exports.signIn=function(req,res){
   return res.render('sign-in',{
    title:'Shop | Sign In'
   });
}
//get the sign up date
module.exports.create=function(req,res){
    if(req.body.password !=req.body.confirmpassword){
        return res.redirect('back');
    }
    User.findOne({email: req.body.email},function(err,user){
        if(err){
            console.log('error in finding user in signing up');
            return;
        }
        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.log('error in creating user while signing up');
                    return;
                }
                return res.redirect('/users/log-in');
            })
        }else{
            return res.redirect('back');
        }
    });
}
module.exports.createSession=function(req,res){
    return res.redirct('/');
}