const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

const generarJWT = (user) => {
  return jwt.sign(
    {
      id: user.id,
    },
    JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );
};

module.exports = {
  generarJWT,
};
