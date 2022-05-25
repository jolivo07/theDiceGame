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
    let result = contOne + contTwo
    document.getElementById("result").innerHTML = result 
    class Dices {
        faces = new Map([
            [1, new DicesSide([4], [1, 2, 3, 5, 6, 7])],
            [2, new DicesSide([1, 7], [2, 3, 4, 5, 6])],
            [3, new DicesSide([1, 4, 7], [2, 3, 5, 6])],
            [4, new DicesSide([1, 3 , 5 ,7], [2 , 4, 6])],
            [5, new DicesSide([1, 3 , 4, 5 ,7], [2, 6])],
            [6, new DicesSide([1, 2, 3, 5, 6, 7], [4])]
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