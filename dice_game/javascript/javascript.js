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
    let contOne = randomDiceOne(1,6)
    let contTwo = randomDiceOne(1,6)
    let result = contOne + contTwo
    document.getElementById("result").innerHTML = result 
    class Dices {
        faces = new Map([
            [1, new DicesSide([4], [1, 2, 3, 5, 6, 7])],
            [2, new DicesSide([1, 7], [2, 3, 4, 5, 6])],
            [3, new DicesSide([1, 4, 7], [2, 3, 5, 6])],
            [4, new DicesSide([1, 3 , 5 ,7], [2 , 4, 6])],
            [5, new DicesSide([1, 3 , 4, 5 ,7], [2, 6])],
            [6, new DicesSide([1, 2, 3, 5, 6, 7], [4])],
        ])
        constructor(name){
            this.name = name;
        }
        roll(number) {
            let face = this.faces.get(number)
            face.visiblePoints.forEach(point => {
                document.getElementById(`${this.name}${point}`).style["visibility"] = "visible";
            });
            face.hiddenPoints.forEach(point => {
                document.getElementById(`${this.name}${point}`).style["visibility"] = "hidden";
            });
        }
    }
    class DicesSide {
        constructor(visiblePoints, hiddenPoints){
            this.visiblePoints=visiblePoints;
            this.hiddenPoints=hiddenPoints;
        }
    }
        const dice1 = new Dices("d")
        const dice2 = new Dices("di")
        dice1.roll(contOne)
        dice2.roll(contTwo)
})
/*if(contOne==1){
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
} */
