import { readFileSync } from "node:fs";

const games = readFileSync("day02.txt", { encoding: "utf-8" })
    .replace(/\r/g, "")
    .trim()
    .split("\n");
console.log(games)



// Gültigen Spiele
// Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
// Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
// Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green

function partOne() {

    let runningTotal = 0
    const maxcubes = { 'red': 12, 'green': 13, 'blue': 14 }

    games.forEach(function (value) {
    let [game, sets] = value.split(':').map(i => i.trim());
    let gameid = parseInt(game.slice(-2)) // Spiel-ID
    let set = sets.split(';').map(i => i.trim());
    let possible = true
    //console.log(set)


     // sets and Cubes
     set.forEach(function(value) {
         let cubes = value.split(",").map(i => i.trim());
         cubes.forEach(function(cube) {
             let [count, color] = cube.split(' ').map(i => i.trim());
             if (Number(count) > maxcubes[color]) { possible = false; }
         });
     });

        if (possible) { runningTotal += gameid; }
    });
    console.log(`Part One: ${runningTotal}`);
}

partOne()

//-------------------------------------------------------------------------------------


function partTwo() {
    let runningTotal = 0

    games.forEach(function (value) {
        const [, sets] = value.split(':').map(i => i.trim());
        let set = sets.split(';').map(i => i.trim());
        const mincubes = { 'red': 0, 'green': 0, 'blue': 0 }


        set.forEach(function (value){
            let cubes = value.split(',').map(i => i.trim());

            cubes.forEach(function (value){
                let [count, color] = value.split(' ').map(i => i.trim());
                if (mincubes[color] < Number(count)){
                    mincubes[color] = Number(count);
                }
            });
        });

        runningTotal += (Object.values(mincubes)
            .reduce((result, item) =>result * item));
    });

    console.log(`Part Two: ${runningTotal}`)
}

partTwo()





