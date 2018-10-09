const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

// Views
app.get("/", (req, res) => {
  res.render("index", { foo: "bar" });
});

app.get("/about", (req, res) => {
  res.render("about", { foo: "bar" });
});

app.get("/post", (req, res) => {
  res.render("post", { foo: "bar" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { foo: "bar" });
});

// REST
app.get("/post-data", (req, res) => {
  const post = require("./data/post");
  res.json(post);
});

app.post("/contact", (req, res) => {
  let user = req.body;
  if (user.name && user.email && user.phone && user.message) {
    res.statusMessage = "OK";
    res.end();
  } else {
    res.statusMessage = "BAD";
    res.send("Заполните, пожалуйста, все поля!");
  }
});

app.listen(3000, () => {
  console.log("Сервер запущен на localhost:3000");
});
