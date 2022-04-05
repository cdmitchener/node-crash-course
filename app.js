const express = require("express");

// express app
const app = express();

// Register view engine -- EJS will be used to view our templates. The default value where it will look is a folder called 'views'.
app.set("view engine", "ejs");
// What if we don't want to name the file 'views'? Below is how to specify the folder name.
// app.set("views", "myviews");

// listen for requests
app.listen(3000);

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  // the object "Home" held in the title variable can be accessed from the inde.ejs file
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  //res.send("<p>about page</p>");
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a New Blog" });
});

// 404 page
// Needs to be lsited last because the program runs top to bottom. If a result is found it will stop running through the code. The use() method says use this fxn for every incoming request. It's not scoped to a specific URL because it's regardless of the URL.
app.use((req, res) => {
  //res.sendFile("./views/404.html", { root: __dirname });

  // Program does not know that the above is a 404 error based on just the name of the file, so we have to manually send the code.
  res.status(404).render("404", { title: "404" });
});
