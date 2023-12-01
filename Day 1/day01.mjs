import { readFileSync } from "node:fs";

const kValues = readFileSync("day01_part1.txt", { encoding: "utf-8" })
    .replace(/\r/g, "")
    .trim()
    .split("\n");

function part1() {
  // Die `map`-Methode wird auf das Array `kValues` angewendet.
  let sum = kValues
      .map((line) => {
        // Für jede Zeichenkette `line` wird ein neues Array `allNums` erstellt.
        let allNums = [...line].map((c) => Number(c)).filter(Boolean)
        console.log('Erstelle Arrays für 4 inputs:',allNums);


          // Die erste und letzte Zahl von `allNums` werden in separaten Variablen gespeichert.
        let firstNum = allNums[0];
        let lastNum = allNums.slice(-1);

        // Ein neuer Wert wird erstellt, der aus der ersten und letzten Zahl von `allNums` besteht.
        return parseInt( `${firstNum}${lastNum}`); // Zeichenkette in Zahl umwandeln
      })

      // Die Summe aller Elemente im Array berechnen
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0)

  console.log(sum)
}

part1()

//-------------------------------------------------------------------------------------

let words = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
]

function part2() {

    // Iteration über jede Eingabezeile mit der .map-Funktion
    let sum = kValues
        .map((line) => {

            // Extrahiere alle Zahlen aus der aktuellen Zeile
            let allnums = [...line]
                .map((c, i) => ({ val: Number(c), idx: i })) // Erstelle ein Objekt für jede Ziffer mit ihrem Wert und Index
                .filter(({ val }) => !isNaN(val)); // Filtere nur die Ziffern heraus, die Zahlen sind

            // Extrahiere alle Positionen der Wörter aus der Liste "words" in der aktuellen Zeile
            let allwords = words
                .map((word, i) => [
                    { val: i, idx: line.indexOf(word) }, // Position des ersten Auftretens des Worts
                    { val: i, idx: line.lastIndexOf(word) }, // Position des letzten Auftretens des Worts
                ])
                .flat() // Verflache das Array
                .filter(({ idx }) => idx !== -1); // Filtere nur die Wörter heraus, die in der Zeile vorkommen

            // Kombiniere die Arrays für Zahlen und Wörter, sortiere sie nach ihrem Index
            let all = [...allnums, ...allwords].sort((a, b) => a.idx - b.idx);

            // Wähle das erste und letzte Element aus dem sortierten Array und erzeuge eine neue Zahl aus den ersten und letzten Zeichen dieser Elemente
            return +`${all[0].val}${all.slice(-1)[0].val}`;
        })
        // Füge die erzeugten Zahlen aller Zeilen zusammen.
        .reduce((a, b) => a + b, 0);

    // Gib die Summe aller erzeugten Zahlen aus.
    console.log(sum);
}
part2()





