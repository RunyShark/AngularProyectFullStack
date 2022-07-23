const { Router } = require("express");
const { checkAuth, validarErros } = require("../middlewares");
const { check } = require("express-validator");
const { getIdea, updateIdea, deleteIdea, postIdea } = require("../controllers");
const { existeTitle, existIdea } = require("../helpers");
const route = Router();

route.get("/", getIdea);

route.put(
  "/:id",
  [
    check("id", "El id es un campo obligatorio para poder editar")
      .not()
      .isEmpty(),
    check("id").custom(existIdea),
    validarErros,
  ],
  updateIdea
);

route.delete(
  "/:id",
  [
    check("id", "El id es un campo obligatorio para poder editar")
      .not()
      .isEmpty(),
    //verificar que exista el id
    check("id").custom(existIdea),
    validarErros,
  ],
  deleteIdea
);

route.post(
  "/",
  [
    check("title").custom(existeTitle),

    check("title", "Es un campo obligaroio el title").not().isEmpty(),
    check("title", "el titulo debe de tener un largo mayor a 3").isLength({
      min: 3,
    }),
    check("description", "Es un campo obligaroio").not().isEmpty(),
    check(
      "description",
      "La descipcion debe de tener un largo mayor a 10"
    ).isLength({ min: 10 }),
    validarErros,
  ],
  postIdea
);

module.exports = {
  idea: route,
};
