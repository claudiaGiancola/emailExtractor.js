const prompt = require("prompt-sync")({ sigint: true });
const userInput = prompt("Enter a frequency: ");

const fs = require("fs");

fs.readFile("./test.txt", "utf-8",function read(err, data) {
  if (err) {
      throw err;
  }

  processFile(data);

  getDomains(data);

});

function processFile (text) {
const matches = text.match(/@softwire./gi);
console.log(`There are ${matches.length} softwire emails in your file`);

}

function getDomains(text) {

  const domains = text.match(/@[A-Z0-9.'_%+-]*/gi);

  console.log(`There are ${domains.length} emails in your file`);

  const domainObj = {};

  for (let domain of domains) {
    domainObj[domain] = domainObj[domain] + 1 || 1;
  }

  const commonDom = [];

  for (let domain in domainObj) {
    if (domainObj[domain] > userInput) {
      commonDom.push([domain, domainObj[domain]])
    };
}

  commonDom.sort(function(a, b) {
    return b[1] - a[1];
  });

  const commonDomObj = {};

  for (let i = 0; i < commonDom.length; i++) {
    commonDomObj[commonDom[i][0].slice(1)] = domainObj[commonDom[i][0]];
  }

  console.log(`The domains that occur more than ${userInput} times are:`)
  console.log(commonDomObj);

}