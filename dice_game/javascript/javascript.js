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
    if(contOne==1){
        document.getElementById("d4").classList.remove("bg-white")
        document.getElementById("d1").classList.add("bg-white")
        document.getElementById("d2").classList.add("bg-white")
        document.getElementById("d7").classList.add("bg-white")
        document.getElementById("d5").classList.add("bg-white")
        document.getElementById("d6").classList.add("bg-white")
        document.getElementById("d3").classList.add("bg-white")
    }else if(contOne==2){
        document.getElementById("d1").classList.remove("bg-white")
        document.getElementById("d7").classList.remove("bg-white")
        document.getElementById("d2").classList.add("bg-white")
        document.getElementById("d3").classList.add("bg-white")
        document.getElementById("d4").classList.add("bg-white")
        document.getElementById("d5").classList.add("bg-white")
        document.getElementById("d6").classList.add("bg-white")
        
    }else if(contOne==3){
        document.getElementById("d1").classList.remove("bg-white")
        document.getElementById("d7").classList.remove("bg-white")
        document.getElementById("d4").classList.remove("bg-white")
        document.getElementById("d2").classList.add("bg-white")
        document.getElementById("d3").classList.add("bg-white")
        document.getElementById("d5").classList.add("bg-white")
        document.getElementById("d6").classList.add("bg-white")
    }
    else if(contOne==4){
        document.getElementById("d1").classList.remove("bg-white")
        document.getElementById("d3").classList.remove("bg-white")
        document.getElementById("d5").classList.remove("bg-white")
        document.getElementById("d7").classList.remove("bg-white")
        document.getElementById("d2").classList.add("bg-white")
        document.getElementById("d4").classList.add("bg-white")
        document.getElementById("d6").classList.add("bg-white")

    }else if(contOne==5){
        document.getElementById("d1").classList.remove("bg-white")
        document.getElementById("d3").classList.remove("bg-white")
        document.getElementById("d5").classList.remove("bg-white")
        document.getElementById("d7").classList.remove("bg-white")
        document.getElementById("d4").classList.remove("bg-white")
        document.getElementById("d6").classList.add("bg-white")
        document.getElementById("d2").classList.add("bg-white")
    }else {
        document.getElementById("d1").classList.remove("bg-white")
        document.getElementById("d2").classList.remove("bg-white")
        document.getElementById("d3").classList.remove("bg-white")
        document.getElementById("d5").classList.remove("bg-white")
        document.getElementById("d6").classList.remove("bg-white")
        document.getElementById("d7").classList.remove("bg-white")
        document.getElementById("d4").classList.add("bg-white")
    }

    if(contTwo==1){
        document.getElementById("di4").classList.remove("bg-white")
        document.getElementById("di1").classList.add("bg-white")
        document.getElementById("di2").classList.add("bg-white")
        document.getElementById("di7").classList.add("bg-white")
        document.getElementById("di5").classList.add("bg-white")
        document.getElementById("di6").classList.add("bg-white")
        document.getElementById("di3").classList.add("bg-white")

    }else if(contTwo==2){
        document.getElementById("di1").classList.remove("bg-white")
        document.getElementById("di7").classList.remove("bg-white")
        document.getElementById("di2").classList.add("bg-white")
        document.getElementById("di3").classList.add("bg-white")
        document.getElementById("di4").classList.add("bg-white")
        document.getElementById("di5").classList.add("bg-white")
        document.getElementById("di6").classList.add("bg-white")
        
    }else if(contTwo==3){
        document.getElementById("di1").classList.remove("bg-white")
        document.getElementById("di7").classList.remove("bg-white")
        document.getElementById("di4").classList.remove("bg-white")
        document.getElementById("di2").classList.add("bg-white")
        document.getElementById("di3").classList.add("bg-white")
        document.getElementById("di5").classList.add("bg-white")
        document.getElementById("di6").classList.add("bg-white")
    }
    else if(contTwo==4){
        document.getElementById("di1").classList.remove("bg-white")
        document.getElementById("di3").classList.remove("bg-white")
        document.getElementById("di5").classList.remove("bg-white")
        document.getElementById("di7").classList.remove("bg-white")
        document.getElementById("di2").classList.add("bg-white")
        document.getElementById("di4").classList.add("bg-white")
        document.getElementById("di6").classList.add("bg-white")

    }else if(contTwo==5){
        document.getElementById("di1").classList.remove("bg-white")
        document.getElementById("di3").classList.remove("bg-white")
        document.getElementById("di5").classList.remove("bg-white")
        document.getElementById("di7").classList.remove("bg-white")
        document.getElementById("di4").classList.remove("bg-white")
        document.getElementById("di6").classList.add("bg-white")
        document.getElementById("di2").classList.add("bg-white")
    }else {
        document.getElementById("di1").classList.remove("bg-white")
        document.getElementById("di2").classList.remove("bg-white")
        document.getElementById("di3").classList.remove("bg-white")
        document.getElementById("di5").classList.remove("bg-white")
        document.getElementById("di6").classList.remove("bg-white")
        document.getElementById("di7").classList.remove("bg-white")
        document.getElementById("di4").classList.add("bg-white")
    }

    let result = contOne + contTwo
    
    document.getElementById("result").innerHTML = result
})


  