const { request, response } = require("express");
const { User, Idea } = require("../db/mysql");

const existeEmail = async (email = "") => {
  const existe = await User.findOne({
    where: {
      email,
    },
  });
  if (existe) {
    throw new Error(`El correo: ${email} ya existe, intente con otro correo`);
  }
};
const userExiste = async (email = "") => {
  const existe = await User.findOne({
    where: {
      email,
    },
  });
  if (!existe) {
    throw new Error(`El usuario con el  correo: ${email}  no existe`);
  }
};

const existeTitle = async (title = "") => {
  const exist = await Idea.findOne({
    where: {
      title,
    },
  });
  if (exist) {
    throw new Error(
      `No se puede repetir los nombre, ya existe una idea con ese nombre:${title}`
    );
  }
};

const existIdea = async (id) => {
  const exist = await Idea.findByPk(id);

  if (!exist) {
    throw new Error(`No existe ninga idea con ese id: ${id}`);
  }
};

module.exports = {
  existeEmail,
  userExiste,
  existeTitle,
  existIdea,
};
