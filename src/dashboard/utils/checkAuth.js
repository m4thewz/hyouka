  
module.exports = async (req, res, next) => { //middleware pra ver se o cara ta logado
    if(req.isAuthenticated()) {
	    return next();
    } else {
	    return res.redirect("/login");
    }
};