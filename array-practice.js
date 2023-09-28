let characters = ["Harry Potter", "Ron Weasley", "Hermione Granger", "Ginny Weasley", "Draco Malfoy", "Fred Weasley", "George Weasley", "Neville Longbottom"]

// Who is part of the Weasley family?

for (let index = 0; index < characters.length; index++) {
    if (characters[index].includes("Weasley")) {
        console.log(`${characters[index]} is part of the Weasley family.`)
    } else {
        console.log(`${characters[index]} is not part of the Weasley family.`)
    }
}

// First letters of names

/* for (let index = 0; index < characters.length; index++) {
    if (characters[index][0] === "H") {
        console.log(`${characters[index]}'s name starts with an H.`)
    } else {
        console.log(`${characters[index]}'s name starts with a different letter.`)
    }
} */

// List the first letters of names

/* for (let index = 0; index < characters.length; index++) {
    console.log(`${characters[index]}'s name starts with ${characters[index][0]}`)
} */