const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB URI from Atlas
mongoose.connect("your_mongodb_uri_here", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello from backend!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
