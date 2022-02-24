module.exports = function (permitteduser) {
    return function (req, res, next) {
      // first get the user from the req
      const user = req.user._id;
  
      // check if user from req and user from body
      let isPermitted = true;
      
    if(req.user._id==permitteduser.user_id){
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