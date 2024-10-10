const express = require("express");
const cors = require("cors");
require('dotenv').config();
const app = express();

var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });



app.get("/", (req, res) => {
    res.json({ message: "Welcome to Hackaton 11 - SV46429488 Joaquin Berrio" });
});



require("./app/routes/routes")(app);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});