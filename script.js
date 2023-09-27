let variable1 = 'kismacska';
let variable2 = 101;
let variable3 = true;
let variable4 = null;

let array1 = ['alma', 'barack', 'szilva', 'vegyes'];
let array2 = [1, 2, 3, 4, 5];
let array3 = ['auto', 54, true, undefined, false, '62'];
let array4 = [variable1, variable2, variable3, variable4];

/* console.log(variableArray4); */

// Ciklusok

/* let counter = 0;

while (counter < 5) { // belefuthatunk végtelen ciklusba
    console.log(counter);
    counter = counter++;
} */

/* for (let counter = 0; counter <= 5; counter++) {
    console.log(counter);
} */

/* for (let index = 0; index < array1.length; index++) {
    console.log(index);
    console.log(array1[index]);
} */

// Stringek is kezelhetők tömbként (karakterek sorozata)

/* for (let index = 0; index < variable1.length; index++) {
    console.log(variable1[index]);
} */

for (let index = 0; index < array1.length; index++) {
    if (array1[index].length % 2 === 1) {
        console.log(array1[index], "páratlan számú karakter")
    } else {
        console.log (array1[index], "páros számú karakter")
    }
}

// array1[index].includes("valami")  --> megnézi hogy tartalmaz-e valamilyen karaktert/eket