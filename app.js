const express = require("express");
const dbConnect = require('./config/mongo');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
const port = 3000;

app.use("/api/categories", require("./routes/categories"));
//app.use("/api", require("./routes/users"));

app.listen(port, () => {
  console.log("Tu app está lista en http://localhost:" + port);
})

dbConnect();