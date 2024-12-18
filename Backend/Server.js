const express = require('express');

const app = express();

const port = 8080;

// const cors = require('cors');
// const connectionDB = require('./Dbconnection');
// const Ticket = require('./Schema');

// app.use(cors());
app.use(express.json());

// connectionDB();

// app.use("/api", require("./Route"));

app.listen(port, (req,res) => {
  console.log(`Server is running on port ${port}`);
})

app.get("/waleee", (req,res) => {
    res.send("Hello World");
})
