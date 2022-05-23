function randomDiceOne(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function randomDiceTwo(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
document.getElementById("rollDice").addEventListener("click",()=>{
    document.getElementById("diceGif").classList.remove("d-none")
    document.getElementById("diceDiv").classList.add("d-none")
    document.getElementById("result").classList.add("d-none")
})
document.getElementById("hold").addEventListener("click",()=>{
    document.getElementById("diceGif").classList.add("d-none")
    document.getElementById("diceDiv").classList.remove("d-none")
    document.getElementById("result").classList.remove("d-none")
    let contOne = randomDiceOne(1,7)
    let contTwo = randomDiceOne(1,7)

    var seleccionad = function(ids, propiedad, valor){
        var valores = ids.split(",");
        for (var i in valores)
            document.getElementById(valores[i].replace(/\s/g, "")).style[propiedad] = valor;
    };

    var seleccionad2 = function(ids, propiedad, valor){
        var valores = ids.split(",");
        for (var i in valores)
            document.getElementById(valores[i].replace(/\s/g, "")).style[propiedad] = valor;
    };
    let result = contOne + contTwo
    document.getElementById("result").innerHTML = result 
        if(contOne==1){
            seleccionad("d4", "visibility", "visible"); 
            seleccionad2("d1,d2,d3,d5,d6,d7","visibility","hidden")
        }else if(contOne==2){
            seleccionad("d1,d7", "visibility", "visible"); 
            seleccionad2("d2,d3,d4,d5,d6","visibility","hidden")
        }else if(contOne==3){
            seleccionad("d1,d4,d7", "visibility", "visible"); 
            seleccionad2("d2,d3,d5,d6","visibility","hidden")
        }
        else if(contOne==4){
            seleccionad("d1,d3,d5,d7", "visibility", "visible"); 
            seleccionad2("d2,d4,d6","visibility","hidden")
        }else if(contOne==5){
            seleccionad("d1,d3,d4,d5,d7", "visibility", "visible"); 
            seleccionad2("d2,d6","visibility","hidden")
        }else {
            seleccionad("d1,d3,d2,d6,d5,d7", "visibility", "visible"); 
            seleccionad2("d4","visibility","hidden")
        }
        if(contTwo==1){
            seleccionad("di4", "visibility", "visible"); 
            seleccionad2("di1,di2,di3,di5,di6,di7","visibility","hidden")
        }else if(contTwo==2){
            seleccionad("di1,di7", "visibility", "visible"); 
            seleccionad2("di2,di3,di4,di5,di6","visibility","hidden")     
        }else if(contTwo==3){
            seleccionad("di1,di4,di7", "visibility", "visible"); 
            seleccionad2("di2,di3,di5,di6","visibility","hidden")
        }
        else if(contTwo==4){
            seleccionad("di1,di3,di5,di7", "visibility", "visible"); 
            seleccionad2("di2,di4,di6","visibility","hidden")
        }else if(contTwo==5){
            seleccionad("di1,di3,di4,di5,di7", "visibility", "visible"); 
            seleccionad2("di2,di6","visibility","hidden")
        }else {
            seleccionad("di1,di3,di2,di6,di5,di7", "visibility", "visible"); 
            seleccionad2("di4","visibility","hidden")
        }
})

