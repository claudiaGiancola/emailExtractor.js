const prompt = require("prompt-sync")({ sigint: true });
const userInput = prompt("Enter display count: ");
// console.log(userInput);

var fs = require("fs");

fs.readFile("./test.txt", "utf-8",function read(err, data) {
  if (err) {
      throw err;
  }

  // Invoke the next step here however you like
  //console.log(content);   // Put all of the code here (not the best solution)
  processFile(data);   // Or put the next step in a function and invoke it

  getDomains(data);

});

function processFile (text) {
let counter = 0;
const matches = text.match(/softwire.com/g);
console.log(matches.length);

}

function getDomains(text) {

  const domains = text.match(/@[A-Z0-9.'_%+-]*/gi);

  const domainObj = {};

  for (let domain of domains) {
    // console.log(domain);
    domainObj[domain] = domainObj[domain] + 1 || 1;

  }

  let commonDom = [];

  for (let domain in domainObj) {
    if (domainObj[domain] > userInput) {
      commonDom.push([domain, domainObj[domain]])
    };
}

  commonDom.sort(function(a, b) {
    return b[1] - a[1];
  });

  console.log(commonDom);

}