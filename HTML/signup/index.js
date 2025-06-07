const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 5000;


app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.send(`
    <form action="/submit" method="POST">
      <label>Name:</label>
      <input type="text" name="name" required /><br/><br/>
      <label>Password:</label>
      <input type="password" name="password" required /><br/><br/>
      <button type="submit">Submit</button>
    </form>
  `);
});


app.post("/submit", (req, res) => {
  const { name, password } = req.body;
  const data = `Name: ${name}, Password: ${password}\n`;

  fs.appendFile("data.txt", data, (err) => {
    if (err) {
      return res.send("Error saving data.");
    }
    res.send("Data saved successfully.");
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
