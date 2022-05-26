function numberRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
document.getElementById("roll-dice").addEventListener("click", () => {
    document.getElementById("dice-image-gif").classList.remove("d-none")
    document.getElementById("dice").classList.add("d-none")
    document.getElementById("result").classList.add("d-none")
})
document.getElementById("hold").addEventListener("click", () => {
    document.getElementById("dice-image-gif").classList.add("d-none")
    document.getElementById("dice").classList.remove("d-none")
    document.getElementById("result").classList.remove("d-none")
    let diceNumberOne = numberRandom(1, 7)
    let diceNumberTwo = numberRandom(1, 7)
    var hideDiceFacesPoints = (ids, value) => {
        var values = ids.split(",");
        for (var i in values)
            document.getElementById(values[i].replace(/\s/g, "")).style["visibility"] = value;
    };
    hideDiceFacesPoints("d1,d2,d3,d4,d5,d6,d7,di1,di2,di3,di4,di5,di6,di7", "hidden")
    faces = new Map([
        [1, [4]],
        [2, [1, 7]],
        [3, [1, 4, 7]],
        [4, [1, 3, 5, 7]],
        [5, [1, 3, 4, 5, 7]],
        [6, [1, 3, 2, 6, 5, 7]]
    ])
    dOne = this.faces.get(diceNumberOne);
    dTwo = this.faces.get(diceNumberTwo);
    dOne.forEach(value => {
        document.getElementById(`d${value}`).style["visibility"] = "visible";
    });
    dTwo.forEach(value => {
        document.getElementById(`di${value}`).style["visibility"] = "visible";
    });
    let result = diceNumberOne + diceNumberTwo
    document.getElementById("result").innerHTML = result
})