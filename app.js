const fs = require('fs');
const colors = require('colors/safe');
const { crearArchivo } = require('./helpers/mult');
const argv = require('./config/yargs');
console.clear();
// const base = 5;



crearArchivo(argv.b , argv.l, argv.h)
    .then(nombreArchivo => console.log(colors.green(nombreArchivo, 'creado')))
    .catch(err => console.log(err));