const express = require("express");
const app = express();
const CONFIG = require("./config/config.js");

const PORT = CONFIG.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is live at http://localhost:${PORT}`);
});
