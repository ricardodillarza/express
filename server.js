const express = require("express"); //LIBRERIA
const app = express(); //ES UNA FUNCION. ASI SE EJECUTA EXPRESS
const port = 8000;
const chalk = require('chalk'); //CAMBIA LOS COLORES DEL CONSOLE.LOG EN LA TERMINAL. ES UN MODULO MUY PEQUEÑO. HAY QUE IMPORTARLOS

/*
app.use("/users", function(req, res) { //EL USE SIRVE PARA UN GET UN PUT, LO QUE SEA.
  res.send("Lista de usuarios");  //CON ESTO SABES QUÉ RESPONDER SEGUN LA RUTA EN EL NAVEGADOR
});
*/

/*app.use("/", function(req, res) {  //PRIMER PARAMETRO LA RUTA, ESA DIAGONAL ES LA RAIZ. Con EL USE PRIMERO SIEMPRE VA A PASAR POR ESTA FUNCION, ES UN MIDDLEWARE
  res.send("Hola");  //ya no se NECESITA EL RES.END
});

*/

app.use(express.static("public")); //PUEDES NO USAR LA DIAGONAL. CON ESTO TE ABRE EL CONTENIDO DE PUBLIC EN EL NAVEGADOR



app.listen(port, function () {
  console.log(chalk.inverse.white("Iniciando servidor..."));
  console.log(chalk.bold.yellow("http://localhost:" + port));
});
