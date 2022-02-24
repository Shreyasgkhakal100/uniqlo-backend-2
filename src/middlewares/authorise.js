module.exports = function (permittedRoles) {
    return function (req, res, next) {
      // first get the user from the req
      const user = req.user._id;
  
      // check if user has any of the permittedRoles
      let isPermitted = true;
      
    if(req.user._id==permittedRoles.user_id){
      isPermitted=true;
    }
  
      // if not then throw an error
      if (!isPermitted) {
        return res.status(403).send({ message: "Permission denied" });
      }
      // if yes then return next
      return next();
    };
  };