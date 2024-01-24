require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const Vote = require("./models/vote");
const favicon = require("serve-favicon");
const faviconPath = path.join(__dirname, "public/images", "favicon.ico");
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(favicon(faviconPath));

// MongoDB connection
const mongoURI = process.env.MONGOURL;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

app.get("/", (req, res) => {
  res.render("index", { successMessage: null });
});

app.post("/submit", async (req, res) => {
  const selectedVote = req.body.Vote;

  try {
    // Find the corresponding vote in the database and update the count
    await Vote.findOneAndUpdate(
      { party: selectedVote },
      { $inc: { count: 1 } },
      { upsert: true }
    );

    // Assuming you're using EJS as the template engine
    res.render("index", { successMessage: "Vote submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/admin", async (req, res) => {
  try {
    // Fetch all votes from the database
    const votes = await Vote.find();

    // Render the admin page with the total vote count
    res.render("admin", { votes });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
