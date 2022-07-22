const { request, response } = require("express");

const { Idea, User } = require("../db/mysql");

const getIdea = async (req = request, res = response) => {
  try {
    const ideas = await Idea.findAll();
    if (ideas.length === 0) {
      const error = new Error("Actualmente no existen ideas en la bd");
      return res
        .status(400)
        .json({ Error: true, msg: `getIdea ${error.message}` });
    }
    res.json({
      Error: false,
      msg: "getIdea",
      results: ideas,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      Error: true,
      path: "Algo salio mal  Error:  createIdea",
      msg: error.message,
    });
  }
};

const updateIdea = async (req = request, res = response) => {
  try {
    const { image, creationDate, title, description } = req.body;
    const ideaUpdate = await Idea.findByPk(req.params.id);

    ideaUpdate.image = image || ideaUpdate.image;
    ideaUpdate.creationDate = creationDate || ideaUpdate.creationDate;
    ideaUpdate.title = title || ideaUpdate.title;
    ideaUpdate.description = description || ideaUpdate.description;
    await ideaUpdate.save();

    res.status(202).json({ Error: false, msg: "updateIdea", ideaUpdate });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      Error: true,
      path: "Algo salio mal  Error: updateIdea",
      msg: error.message,
    });
  }
};
const deleteIdea = async (req = request, res = response) => {
  const { id } = req.params;
  try {
    await Idea.destroy({
      where: { id },
    });
    res.status(202).json({ Error: false, msg: "deleteIdea" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      Error: true,
      path: "Algo salio mal  Error: deleteIdea",
      msg: error.message,
    });
  }
};
const postIdea = async (req = request, res = response) => {
  try {
    const idea = await new Idea(req.body);
    idea.save();

    const { title, creationDate, description } = idea;

    res.status(201).json({
      Error: false,
      msg: "createIdea",
      newOIdea: {
        title,
        creationDate,
        description,
      },
    });
  } catch (error) {
    console.log(error.message);

    res.status(500).json({
      Error: true,
      path: "Algo salio mal  Error: postIdea",
      msg: error.message,
    });
  }
};

const reviw = async (req = request, res = response) => {
  const reviw = await User.findByPk(req.params.id);
};
module.exports = {
  getIdea,
  updateIdea,
  deleteIdea,
  postIdea,
  reviw,
};
