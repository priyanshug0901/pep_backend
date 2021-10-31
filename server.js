const { appendFile } = require("fs");
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log("request made on server from browser");

  // console.log(req.method);
  // console.log(req.url);
  // res.setHeader('Content-Type','text/plain');
  // res.write("hello responding from server");
  // res.end();

  const url = req.url;
  console.log(url);
  let path = "./views/";
  switch (url) {
    case "/":
      path += "index.html";
      res.statusCode=200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode=200;
      break;
    case "/contactUs":
      path += "contactus.html";
      res.statusCode=200;
      break;
    case "/contact":
      res.statusCode=301;
      res.setHeader('Location','/contactUs');
      res.end();  
   default : path+='404.html';
   res.statusCode=400;
  }

  fs.readFile(path, (err, html) => {
    if (err) {
      console.log(err);
    } else res.end(html);
  });
});

server.listen(3000, "localhost", () =>
  console.log("server listening on port 3000")
);
