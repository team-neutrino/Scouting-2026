const quotes = {
"": ["", ""],
};

function getQuote() {
  let keyList = Object.keys(quotes);
  let amountOfKeys = keyList.length;
  let keyNumber = getRandomInt(0, amountOfKeys);
  let personQuoteList = quotes[keyList[keyNumber]];
  let quote = personQuoteList[getRandomInt(0, personQuoteList.length-1)];
  let wordCount = quote.split(' ').length-2;
  let quotePackage = [quote, "-" + keyList[keyNumber], ((0.45*wordCount))*1000];
  return quotePackage;
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
