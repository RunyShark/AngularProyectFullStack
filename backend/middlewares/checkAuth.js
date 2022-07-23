const jwt = require("jsonwebtoken");

const checkAuth = async (req, res, next) => {
  const token = req.header("x-token");

  console.log(token);
  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "No hay token en la petición",
    });
  }

  try {
    const { id, name } = jwt.verify(token, process.env.JWT_SECRET);

    req.uid = id;
    req.name = name;
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: "Token no válido",
    });
  }

  next();
};

module.exports = {
  checkAuth,
};
