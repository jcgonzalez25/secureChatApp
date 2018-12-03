var WebSocketServer = require("/usr/local/lib/node_modules/ws").Server;
var server = new WebSocketServer({port:9000});
var Groups = [];
var crypto = require('crypto';)
function handleMessage(message,client){
  console.log(message);
  client.send("recieved");
}
server.on("connection", function(client) {
  client.on("message",(message)=>handleMessage(message,client));
});
