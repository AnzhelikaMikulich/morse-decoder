const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let arr = [];
  let input = expr.split("**********");
  console.log(input);
  for (let i = 0; i < input.length; i++) {
    let element = input[i];
    let a = element.match(/.{1,10}/g);
    console.log(a.push(" "));
    for (let j = 0; j < a.length; j++) {
      let word = a[j].match(/.{1,2}/g);
      for (let i = 0; i < word.length; i++) {
        let element = word[i];
        if (element === "10") {
          word.splice(i, 1, ".");
        } else if (element === "11") {
          word.splice(i, 1, "-");
        } else {
          word.splice(i, 1, " ");
        }
      }
      arr.push(MORSE_TABLE[word.join("").trim()]);
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === undefined) {
        arr.splice(i, 1, " ");
      }
    }
  }

  return arr.join("").substring(0, arr.length - 1);
}

module.exports = {
  decode,
};
