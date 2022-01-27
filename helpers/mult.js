const fs = require('fs');

const crearArchivo = async (base = 5, listar = false, hasta = 1) => {
    let salida = '';
    for (i = 0; i <= hasta; i++){
        salida += `${base} x ${i} = ${base * i}\n`;
    }

    if(listar === true){
        console.log(salida);
    }


    fs.writeFileSync(`./salidas/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
}

module.exports = {
    crearArchivo
}