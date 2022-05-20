function randomDiceOne(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function randomDiceTwo(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }


document.getElementById("rollDice").addEventListener("click",()=>{
    document.getElementById("diceGif").classList.remove("d-none")
    document.getElementById("diceDiv").classList.add("d-none")

})


document.getElementById("hold").addEventListener("click",()=>{
    let contOne = randomDiceOne(1,6)
    let contTwo = randomDiceOne(1,6)
    if(contOne==1){
        document.getElementById("d4").classList.remove("d-none")
        
    }else if(contOne==2){
        document.getElementById("d4").classList.add("d-none")
        document.getElementById("d1").classList.remove("d-none")
        document.getElementById("d7").classList.remove("d-none")
    }
    console.log(contOne);
})


  