var http = require("http")
var url = require("url");
var port=8080;
function start(route, handle) {
  function onRequest(request, response) {
	console.log("========= Nouvelle requête =========")
    var pathname = url.parse(request.url).pathname;
    console.log("Requête reçue pour le chemin " + pathname + ".");
    route(handle, pathname, response, request);
  }
    http.createServer(onRequest).listen(port);
    console.log("Démarrage du serveur.");
}

exports.start = start;