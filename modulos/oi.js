function beleza() {
    console.log('Beleza!')
}

function tchau() {
    console.log('Tchau!')
}

// Declaração que torna possível importar ou exportar, neste caso, um módulo CommonJS
/*
    REFERÊNCIAS -> https://medium.com/liferay-engineering-brazil/modulariza%C3%A7%C3%A3o-em-javascript-101-8bf5282bcc56

    CommonJS = é um pedaço reutilizável de javascript que exporta objetos específicos 
               os tornando disponíveis para que outros módulos possam chamá-lo em seus programas.

    module.exports = {
        beleza : beleza,
        // tchau : tchau
    }
*/

export default {beleza, tchau}