function logYourAge(yourAge) {
    console.log(`You are ${yourAge} years old!`)
}

function ageCalculator(birthYear, currentYear) {
    let age = currentYear - birthYear
    return age
}

logYourAge(ageCalculator(1989, 2023))