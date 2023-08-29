const http = require("http");
const routes = require("./routes");

const server = http.createServer(routes);

server.listen(3000);

console.log("node.js server at port 3000");