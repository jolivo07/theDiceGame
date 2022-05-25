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
    var modifyingStyleCss = (ids, valor)=>{
        var valores = ids.split(",");
        for (var i in valores)
            document.getElementById(valores[i].replace(/\s/g, "")).style["visibility"] = valor;
    };
     modifyingStyleCss("d1,d2,d3,d4,d5,d6,d7,di1,di2,di3,di4,di5,di6,di7","hidden")
    diceOne = new Map([
        [1, [4]],
        [2, [1,7]],
        [3, [1,4,7]],
        [4, [1,3,5,7]],
        [5, [1,3,4,5,7]],
        [6, [1,3,2,6,5,7]]
    ])
    dOne = this.diceOne.get(contOne);
    dTwo = this.diceOne.get(contTwo);
    dOne.forEach(value => {
        document.getElementById(`d${value}`).style["visibility"] = "visible";
    });
    dTwo.forEach(value => {
        document.getElementById(`di${value}`).style["visibility"] = "visible";
    });
        let result = contOne + contTwo
        document.getElementById("result").innerHTML = result 
})


