const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Idea",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      image: {
        type: DataTypes.STRING,
        defaultValue:
          "https://images.assetsdelivery.com/compings_v2/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016.jpg",
      },
      creationDate: {
        type: DataTypes.DATE,
        defaultValue: new Date().getTime(),
      },
      title: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
      },
    },
    { timestamps: false }
  );
};
