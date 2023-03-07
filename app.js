const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const createApp = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(morgan("tiny"));

  // Health Check
  app.get("/hello", async (req, res) => {
    res.status(200).send("hello");
  });

  return app;
};

module.exports = { createApp };
