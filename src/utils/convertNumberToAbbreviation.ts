function convertNumberToAbbreviation(number: number): string {
  var suffixes = ["", "K", "M", "B", "T"];
  var suffixNum = Math.floor(("" + number).length / 3);
  var shortValue = parseFloat(
    (suffixNum !== 0 ? number / Math.pow(1000, suffixNum) : number).toPrecision(
      2
    )
  );
  if (shortValue % 1 !== 0) {
    shortValue = parseInt(shortValue.toFixed(1));
  }

  return shortValue + suffixes[suffixNum];
}

export default convertNumberToAbbreviation;
