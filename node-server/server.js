const express = require("express");
const bodyParser = require('body-parser');
const routes=require("./routes/userRoutes")
require("dotenv").config({ path: __dirname + "/.env" });
const connectDB = require('./utils/database');


const app = express();




app.use(express.json());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/v1",routes)



app.get("/", (req, res) => {
  res.send({
    msg: "Api is Running",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Listening on Port ${PORT}`);
});