let x = 10
let y = "text"
let z = true

let arr = [4, "cica", true, null, "kutya", 945]

let newArr = [x, y, z]

let newerArr = [arr, newArr]

let person1 = {
    name: "John Doe",
    age: 35,
    isMale: true,
    children: ["Luke", "Emily", "Lucy"],
    favoriteThings: {
        animal: "dog",
        food: "omelette",
        movie: "Inception"
    }
}

// console.log(person1)

// console.log(person1.children[1])

// console.log(person1.favoriteThings.movie)

let jsonObj = [
    {
        "name": "Gipsz Jakab",
        "age": 42,
        "hair-count": 10,
        "zokni-count": 20
    },
    {
        "name": "Példa Péter",
        "age": 28,
        "hair-count": 12000000,
        "zokni-count": 12
    },
    {
        "name": "John Doe",
        "age": 6,
        "hair-count": 200,
        "zokni-count": 37
    },
]

/* for (let i = 0; i < jsonObj.length; i++) {
     let user = jsonObj[i] // minden interációban más értéket kap a változó
     if (user.age > 18 || user["hair-count"] > 11) {
        console.log(`${user.name} kapni fog reklámot`)
     } else {
        console.log(`${user.name} nem használhatja a sampont`)
     }
} */

for (let i = 0; i < jsonObj.length; i++) {
    let user = jsonObj[i]
    if (user["zokni-count"] % 2 === 1) {
        console.log(`sell ${user.name} a single zokni`)
    } else {
        console.log(`${user.name} sadly has exact pair`)
    }
}
// példa