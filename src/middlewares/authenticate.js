require("dotenv").config();
const jwt = require("jsonwebtoken");//npm jsonwebtoken

//function for verifying token
const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) return reject(err);

      resolve(user);
    });
  });
};

module.exports = async (req, res, next) => {
  // check  authorization in header
  // if not throw error
  if (!req.headers.authorization)
    return res.status(400).send({
      message: "authorization token was not provided or was not valid",
    });

  // if bearer token is in authorization header
  // if not throw an error
  if (!req.headers.authorization.startsWith("Bearer "))
    return res.status(400).send({
      message: "authorization token was not provided or was not valid",
    });

  // split the bearer token 
  const token = req.headers.authorization.split(" ")[1];

  // then call jwt to verify the token
  let user;
  // if token is invalid then  throw an error
  try {
    user = await verifyToken(token);
  } catch (err) {
    return res.status(400).send({
      message: "authorization token was not provided or was not valid",
    });
  }

  // if token is valid then put the user from the token in the req 
  req.user = user.user;

  return next();
};
