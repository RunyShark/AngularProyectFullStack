const { request, response } = require("express");
const { hassPassword, checkPassword, generarJWT } = require("../helpers");

const { User } = require("../db/mysql");

const createUser = async (req = request, res = response) => {
  try {
    const user = new User(req.body);

    user.password = await hassPassword(req.body.password);
    user.save();
    const { name, email, password } = user;

    res.status(201).json({
      Erro: false,
      msg: "CreateUser",
      newUser: {
        name,
        email,
        password,
      },
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      Error: true,
      path: "Algo salio mal  Error: createUser",
      msg: error.message,
    });
  }
};

const loginUser = async (req = request, res = response) => {
  try {
    const { email, password } = req.body;
    const loginUser = await User.findOne({
      where: {
        email,
      },
    });

    if (await checkPassword(password, loginUser.password)) {
      res.json({
        Erro: false,
        msg: "Login",
        user: {
          uid: loginUser.id,
          name: loginUser.name,
          toke: generarJWT(loginUser),
        },
      });
    } else {
      res.status(400).json({
        Error: true,
        msg: "Login fail: la contraseña ingresada es incorrecta",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      Error: true,
      path: "Algo salio mal  Error:loginUser",
      msg: error.message,
    });
  }
};
const reNewToken = async (req = request, res = response) => {
  try {
    const { uid, name } = req;
    const data = {
      id: uid,
      name,
    };

    const token = generarJWT(data);
    res.json({ msg: "ok", uid, name, token });
  } catch (error) {
    console.log(error);
    res.status(500).json(
      `Algo salio mal  Error: ${{
        Error: true,
        path: "reNewToken",
        msg: error.message,
      }}`
    );
  }
};

module.exports = {
  createUser,
  loginUser,
  reNewToken,
};
