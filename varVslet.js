console.log("avec var : variables globales");
function printSquareWithMistake(sideLength) {
    for (var i = 0; i < sideLength; i++) {
        console.log("i du premier for " + i);
        var line = '';
        for (var i = 0; i < sideLength; i++) {
            console.log("i du second for " + i);
            line += '*';
        }
        console.log(line);
    }
}
printSquareWithMistake(3);
/*
    Résultat attendu :

    ***
    ***
    ***
*/
console.log("avec let : variables locales ");
function printSquare(sideLength) {
    for (var i = 0; i < sideLength; i++) {
        console.log("i du premier for " + i);
        var line = '';
        for (var i_1 = 0; i_1 < sideLength; i_1++) {
            console.log("i du second for " + i_1);
            line += '*';
        }
        console.log(line);
    }
}
printSquare(3);
/*
    Résultat attendu :

    ***
    ***
    ***
*/
/*
function getGreetingFactory(firstName: string): () => string {
    let greeting = `Hello ${firstName} (${Date.now()})`;
    return () => greeting;      // Note capturing of 'greeting' here.
}
const greeter = getGreetingFactory('John');
console.log(greeter());
setTimeout(() => console.log(greeter()), 10);
setTimeout(() => console.log(getGreetingFactory('John')()), 10);

function veryFriendlyGreeter(firstName: string): void {
    for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log(`${i + 1}: Hello ${firstName}!`), 50);
    }

    for (let j = 0; j < 3; j++) {
        // Note correct capturing of 'j' because of 'let'.
        setTimeout(() => console.log(`${j + 1}: Hello ${firstName}!`), 50);
    }
}
veryFriendlyGreeter('John');*/ 
