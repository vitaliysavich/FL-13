let check = parseInt(prompt(`Input your check number:`).replace(/,/, `.`));
let tipPer = parseInt(prompt(`Input your tip percentage:`).replace(/,/, `.`));
let round = 2;
let perc = 100;
let tipAm = +(check * tipPer / perc).toFixed(round);

if (tipPer > perc || tipPer < 0 || check < 0 || isNaN(tipAm)) {
  alert(`Invalid input data`);
} else {
  alert(
    `Check number: ${check}\nTip: ${tipPer}%\nTip amount: ${tipAm}\n Total sum to pay: ${+(
      tipAm + check
    ).toFixed(round)}`
  );
}
