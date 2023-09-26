function logger(yourage) {
    console.log("You are " + yourage + " years old!");
}

function ageCalculator(birthyear, currentyear) {
    let age = currentyear - birthyear
    return age
}

logger(ageCalculator(1989, 2023))