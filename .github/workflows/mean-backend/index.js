const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB URI from Atlas
mongoose.connect("mongodb+srv://Krish:<db_password>@cluster0.n3ic6fc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello from backend!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
