const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

// express app
const app = express();

// Connect to MongoDB
const dbuRI =
  "mongodb+srv://cdmitch:sdev255@sdev255.eptvt.mongodb.net/node-tutorial?retryWrites=true&w=majority";
// Asynchronous task
mongoose
  .connect(dbuRI)
  // listen for requests after successful connection to DB
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// Register view engine -- EJS will be used to view our templates. The default value where it will look is a folder called 'views'.
app.set("view engine", "ejs");
// What if we don't want to name the file 'views'? Below is how to specify the folder name.
// app.set("views", "myviews");

// Middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// // Mongoose and MongoDB sandbox routes
// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "New Blog",
//     snippet: "About my new blog",
//     body: "More about my new blog...",
//   });

//   blog
//     .save()
//     // Send to collection in DB
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/all-blogs", (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/single-blog", (req, res) => {
//   Blog.findById("626066fc460464abda67f05b")
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// Routes
app.get("/", (req, res) => {
  // const blogs = [
  //   {
  //     title: "Yoshi finds eggs",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     title: "Mario finds stars",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     title: "How to defeat bowser",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  // ];
  // // the object "Home" held in the title variable can be accessed from the inde.ejs file
  // res.render("index", { title: "Home", blogs });

  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  //res.send("<p>about page</p>");
  res.render("about", { title: "About" });
});

// scope the routes
app.use("/blogs", blogRoutes);

// 404 page
// Needs to be lsited last because the program runs top to bottom. If a result is found it will stop running through the code. The use() method says use this fxn for every incoming request. It's not scoped to a specific URL because it's regardless of the URL.
app.use((req, res) => {
  // res.sendFile("./views/404.html", { root: __dirname });

  // Program does not know that the above is a 404 error based on just the name of the file, so we have to manually send the code.
  res.status(404).render("404", { title: "404" });
});
