// Middleware to check if the user is authorized to make changes 

const stay= require("../src/models/stay");

module.exports.isAuthorized = async(req,res,next)=>{

    const {id}= req.params;
    const stay= await stay.findById(id);
    if(!stay.author.equals(req.user._id)){
        req.flash("error","You are not authorized")
        return res.redirect(`/stays/${id}`);
    }
    next();
}