const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

fs.readFile('./countries.json', (err, data) => {
  if (err) {
    throw err;
  }
  rl.question("Type the name of a country to display information: ", (answer) => {
    const countryName = answer;
    const parsed = JSON.parse(data);
    for (var i = 0; i < parsed.length; i ++) {
      if (parsed[i].name === countryName) {
        console.log ("Country: " + parsed[i].name);
        console.log("Capital: " + parsed[i].capital);
        console.log("Languages: " + parsed[i].languages);
        console.log ("Top Level Domain " + parsed[i].topLevelDomain);
        return
      }
    rl.close();
    }
  });
});
