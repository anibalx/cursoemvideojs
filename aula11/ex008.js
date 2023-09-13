// OBS: nodexec -> F8 inicia e F9 termina, ctrl + j para esconder o terminal


// Exibe no console a mensagem.
console.log(`Olá, Mundo!`)


/*
    Referência:           https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime
    
    getTIme():            Um número que representa os milissegundos passados entre 1/1/1970 00:00:00 UTC e a data atual.
    1e7:                  1 seguido de 7 zeros.
    de1do1de1970_AteAqui: variável que armazena um valor passado por data.getTIme()
*/
function sleep(millisegundos) {
    let data = new Date()
    let de1do1de1970_AteAqui = data.getTime()
    let hora = data.getHours()
    let minuto = data.getMinutes()

    console.log(`${hora} ${minuto}`)

    for (let inicio = 0; inicio < 1e7; inicio++) {
        
        // tempo em execução - tempo armazenado, se for maior que o valor em milisegundos, pare.
        if ((new Date().getTime() - de1do1de1970_AteAqui) > millisegundos){
            break;
      }
    }

    sleep(millisegundos)
}

sleep(3000)



/*
    sleep(): faz o computador "adormecer" o tempo repassado na função.  

    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
        }
    }

    3000 milliseconds = 3 segundos

    sleep(3000)
*/
