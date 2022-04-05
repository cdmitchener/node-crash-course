// Compare this code to the server.js file, which utilizes lodash. The code here (express) is more streamlined and easier to edit.

const http = require("http");
const fs = require("fs");
const _ = require("lodash"); // can call it whatever we want, but common practice is to just use the underscore

const server = http.createServer((req, res) => {
  // lodash
  const num = _.random(0, 20);
  console.log(num);

  const greet = _.once(() => {
    console.log("hello");
  });

  greet();
  greet();

  // set header content type
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301; // resource trying to access has been moved
      res.setHeader("Location", "/about"); // permanent redirect to correct location
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
  }

  // send html
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    // res.write(data);
    res.end(data);
  });
});

// localhost is the default value for 2nd argument
server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
