const http = require("http");
const server = http.createServer((req, res) => {
  let url = req.url;
  switch (url) {
    case "/api/data":
      res.write(getData("gal"));
      break;
    default:
      res.write("page no found");
  }
  res.end();
});

server.listen(8080, () => {
  console.log("localhost是8080");
});
