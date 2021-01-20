const express = require("express");
const app = express();

const hbs = require("hbs");
require('./hbs/helpers');

//Me da el puerto generado por heroku, si no existe (localmente no existe) me dará el puerto 3000
const port = process.env.PORT || 3000;

//Middleware
app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');
//Express HBS Engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home',{
        name: 'SAMY'
    });
});

app.get('/about', (req, res) => {
    res.render('about',{
        name: 'Gonorrea'
    });
});

/*app.get('/data', (req, res) => {
    res.send('Hola Data');
});*/

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});