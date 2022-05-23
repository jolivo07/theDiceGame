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
    var modifyingStyleCss = (ids, propiedad, valor)=>{
        var valores = ids.split(",");
        for (var i in valores)
            document.getElementById(valores[i].replace(/\s/g, "")).style[propiedad] = valor;
    };
    let result = contOne + contTwo
    document.getElementById("result").innerHTML = result 

        if(contOne==1){
            modifyingStyleCss("d4", "visibility", "visible"); 
            modifyingStyleCss("d1,d2,d3,d5,d6,d7","visibility","hidden")
        }else if(contOne==2){
            modifyingStyleCss("d1,d7", "visibility", "visible"); 
            modifyingStyleCss("d2,d3,d4,d5,d6","visibility","hidden")
        }else if(contOne==3){
            modifyingStyleCss("d1,d4,d7", "visibility", "visible"); 
            modifyingStyleCss("d2,d3,d5,d6","visibility","hidden")
        } else if(contOne==4){
            modifyingStyleCss("d1,d3,d5,d7", "visibility", "visible"); 
            modifyingStyleCss("d2,d4,d6","visibility","hidden")
        }else if(contOne==5){
            modifyingStyleCss("d1,d3,d4,d5,d7", "visibility", "visible"); 
            modifyingStyleCss("d2,d6","visibility","hidden")
        }else {
            modifyingStyleCss("d1,d3,d2,d6,d5,d7", "visibility", "visible"); 
            modifyingStyleCss("d4","visibility","hidden")
        }
        if(contTwo==1){
            modifyingStyleCss("di4", "visibility", "visible"); 
            modifyingStyleCss("di1,di2,di3,di5,di6,di7","visibility","hidden")
        }else if(contTwo==2){
            modifyingStyleCss("di1,di7", "visibility", "visible"); 
            modifyingStyleCss("di2,di3,di4,di5,di6","visibility","hidden")     
        }else if(contTwo==3){
            modifyingStyleCss("di1,di4,di7", "visibility", "visible"); 
            modifyingStyleCss("di2,di3,di5,di6","visibility","hidden")
        } else if(contTwo==4){
            modifyingStyleCss("di1,di3,di5,di7", "visibility", "visible"); 
            modifyingStyleCss("di2,di4,di6","visibility","hidden")
        }else if(contTwo==5){
            modifyingStyleCss("di1,di3,di4,di5,di7", "visibility", "visible"); 
            modifyingStyleCss("di2,di6","visibility","hidden")
        }else {
            modifyingStyleCss("di1,di3,di2,di6,di5,di7", "visibility", "visible"); 
            modifyingStyleCss("di4","visibility","hidden")
        }
})