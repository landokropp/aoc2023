import { readFileSync } from "node:fs";

const lines = readFileSync("day04.txt", { encoding: "utf-8" }) // read day??.txt content
    .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
    .trim() // Remove starting/ending whitespace
    .split("\n"); // Split on newline

// Return a new object to avoid side effects between part 1 and 2
function getInput() {
    return [...lines];
}


const cards = []
const convertLinesToCards = () => {
    // Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
    lines.forEach( ( line, i ) => {
        let [ winningString, cardString ] = line.split( ': ' )[ 1 ].split( ' | ');
        cards.push( {
            winningNums: winningString.trim().split( /\s+/ ),
            cardNums:    cardString.trim().split( /\s+/ )
        } );
    } );
}


function part1() {

    convertLinesToCards();

    // iteration über die Cards und die Gewinnnummern checken
    let totalScore = 0;
    cards.forEach((card, i) => {
        let cardScore = 0;
        for (const num of card.cardNums) {
            if (card.winningNums.includes(num)) {
                if (cardScore === 0){
                    cardScore = 1;
                }else {
                    cardScore *= 2
                }
            }
        }
        totalScore += cardScore;
    });
    console.log(totalScore);
}

function part2() {
    const input = getInput();
    //do something here
}

part1();
part2();

console.log()