import { readFileSync } from "node:fs";

const lines = readFileSync("day05.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline

// Return a new object to avoid side effects between part 1 and 2
function getInput() {
  return [...lines];
}

function part1() {
  const input = getInput();
  console.log(input)

  var raceLengths   = input[ 0 ].split( ':' )[ 1 ].trim().split( /\s+/ ).map( ( n ) => Number( n ) );
  var bestDistances = input[ 1 ].split( ':' )[ 1 ].trim().split( /\s+/ ).map( ( n ) => Number( n ) );


  var totalScore = 1

  for (let i = 0; i < raceLengths.length; i++){
    totalScore *= searchWinningOption(raceLengths[i], bestDistances[i])
  }

  console.log('Part 1:', totalScore)
}




function part2() {
  const input = getInput();
  console.log('Part 2:',input)

  var raceLengths   = input[ 0 ].split( ':' )[ 1 ].trim().split( /\s+/ ).map( ( n ) => Number( n ) ).join('');
  var bestDistances = input[ 1 ].split( ':' )[ 1 ].trim().split( /\s+/ ).map( ( n ) => Number( n ) ).join('');

  const winningOptions = searchWinningOption(raceLengths, bestDistances);

  console.log('Ergebnis Part 2:',winningOptions)
}

const searchWinningOption = (raceTime, bestDist) => {
  var winningSum = 0
  for (let i = 0; i <= raceTime; i++){
    if (((raceTime - i) * i) > bestDist){
      winningSum++
    }
  }
  return winningSum
}

part1();
part2();
