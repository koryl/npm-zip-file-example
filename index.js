var fs = require("fs");
var path = require('path');
var zip = new require('node-zip')();

let filename = "test.file";
let result = "result.zip";

fs.writeFile(filename, 'Hello World!', (err) => {
  if (err) {
    console.log(err)
  }
  console.log('Hello World > ' + filename);
  packFile()
});

function packFile() {
  zip.file(filename, fs.readFileSync(path.join(__dirname, filename)));
  var data = zip.generate({ base64: false, compression: 'DEFLATE' });
  console.log(data); // ugly data
  fs.writeFileSync(result, data, 'binary');
  console.log("Generating zip finished successfully!");
}
