function relogio(){
    let data = new Date()
    let hr = data.getHours()
    let min = data.getMinutes()
    let sec = data.getSeconds()

    if (hr < 10){ //! coloca o 0 na frente dos números menores do que 10
        hr = "0" + hr
    }
    if (min < 10){
        min = "0" + min
    }
    if (sec < 10){
        sec = "0" + sec
    }

    document.querySelector("#horas").innerHTML = hr
    document.querySelector("#min").innerHTML = min
    document.querySelector("#sec").innerHTML = sec

    setInterval("relogio()", 1) //! reinicia a função a cada 1 milisegundo
}