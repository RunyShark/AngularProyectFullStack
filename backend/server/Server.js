const express = require("express");
const morgan = require("morgan");
const { conn } = require("../db/mysql");
const cors = require("cors");
const { idea, auth } = require("../routes");
require("colors");

const { PORT } = process.env;

class Server {
  constructor() {
    this.app = express();
    this.port = PORT;
    this.path = {
      routeAuth: "/api/auth",
      routeIdea: "/api/idea",
    };
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors(""));
    this.app.use(morgan("dev"));
  }

  routes() {
    this.app.use(this.path.routeAuth, auth);
    this.app.use(this.path.routeIdea, idea);
  }

  listen() {
    conn.sync({ force: false }).then(() => {
      this.app.listen(this.port, (error) => {
        if (error) console.log(`${"status 500 lister sv".red} ${error}`);
        console.log(
          `${"server corriendo en el purto".rainbow} ${this.port.green}`
        );
      });
    });
  }
}

module.exports = Server;
