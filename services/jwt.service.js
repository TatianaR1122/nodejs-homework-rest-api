const jwt = require('jsonwebtoken');
const { JWT_SECRET} = process.env;

const createJWT = payload => {
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "23h" });
    return token;
};

const verifyJWT = token => {
  return jwt.verify(token, JWT_SECRET);
};
module.exports = {
  createJWT,
  verifyJWT,
};