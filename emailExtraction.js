// const text = "forequarters Horlivka's Wideners footings canthooks venerations interdiffused belch softwire.comvenatical zocalo faller eyewaters Costners tickseed dismountable chauntry syndetic outlook.com analise@yahoo.com whammys collie unalphabetized regaling boffin neologist swi.re Yizkors Miraloma smutty nondescriptive zoosperm campfires bridals brainchildren funks bigos hotmail.fr maegan_alyce@my-email.net weakhanded unpeerable bullheaded waspishness commutes yahoo.com hotmail.fr registrable tangiblenesses Switzers clearest Victorianizing brunhilda_zullo@techswitch.co.uk womanpost nissie_elconin@gmail.com felspathoid gmail.com guildhalls pardi swellfishes hotmail.com Casaubon estimations wirelike mirelle.taub@outlook.com reafforestation dannebrog hotmail.com schipperkes communicably anthologizing extractively softwire.comet.net perichondrial overindebtednesses densifier Glenmonts disattuning clit frisker hydrid gurges coreign";

var fs = require("fs");

// fs.readFile("./test.txt","utf-8");


fs.readFile("./test.txt", "utf-8",function read(err, data) {
  if (err) {
      throw err;
  }
  const content = data;

  // Invoke the next step here however you like
  //console.log(content);   // Put all of the code here (not the best solution)
  processFile(content);   // Or put the next step in a function and invoke it
});

function processFile (text) {

const matches = text.match(/softwire.com/g);

console.log(matches.length);

//let counter = 0;

// for(let i = 0; i < text.length; i++) {

//   if (text.substring(i, (i + 12)) === "softwire.com") {
//     counter += 1;
//     }

// }

}