//mostrar el ajedrez cuando ponga la pagina 

var http = require('http');
//leer un archivo  debemos importarlo 
var fs = require ('fs');
var path = require('path');
var server = http.createServer( atenderservidor );

console.log("servidor iniciado");
//crear una instanacia del servidor http e iniciar en el puerto 8088
server.listen( process.env.PORT || 5000);

//coffescrip o typescript
function atenderservidor(request, response){
	//se puede utilizar response write 
	//sacar un mensaje cuando arranque y cada vez que le llgue una pqticion 
	console.log("peticion recibida:" + request.url);
	
	if (request.url === "/fecha "){
	retornararchivo (request, response);
	}else{
	retornararchivo(request, response);	
	}
}

function retornararchivo(request, response){
	//creamos el callbar archivoListo para mostrar
	console.log('Ruta de busqueda:' + path.normalize((__dirname + '/' + request.url.toString())));
	console.log('Ruta de separada:' + path.normalize((__dirname + '/' + request.url.toString())).split(path.sep));
	var ruta = path.normalize((__dirname + '/' + request.url.toString())).split(path.sep);
	var ejemplo = ((__dirname + '/' + request.url.toString()));
	var concatenar="";
for (var i = 0 ; i<ruta.length;i++){
//concatenar = (ruta[i].concat("\\\\"));
concatenar+=ruta[i]+ "\\\\";
console.log('Concatenar:' + concatenar);

}	


	//ruta = ruta.replace(",", "\\");
	//var rutanueva = ejemplo.replace("\", "\\");
	//var res = ejemplo.replace("FERNEY", "FER");
	//var ruta = ruta.replace(",","\\");
	console.log('Ruta como arreglo:' + ruta);
	
	//console.log('Parse:'+ path.parse((__dirname + '/' + request.url)));
	//console.log('Ruta de busqueda:' + request.url.toString());
	//fs.readFile(__dirname+'/'+ request.url, archivoListo);
	console.log('RutaConcatenada para path:' + concatenar);
	fs.readFile(concatenar, archivoListo);
	//fs.readFile(path.join((__dirname +'/' + request.url), archivoListo));
	console.log("Ruta de ingreso:" + process.cwd());
	function archivoListo(error, data){
		if (error == null){
			response.write(data);
			// para que termine
			response.end();
		}else{
		console.log(error);
			response.end(error.toString());
			console.log("Se encontro un error");
			
		}
		
	}
}