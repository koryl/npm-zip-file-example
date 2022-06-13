var fs = require("fs");
var path = require("path");
var zipdir = require('zip-dir');

let output = "output";
let outputDirPath = path.join(__dirname, output);
let filename = "test.file";
let result = "result.zip";


createOutputDir();
createFileAndPackDir();
packOutputDirectory();

async function createOutputDir() {
  if (!fs.existsSync(outputDirPath)) {
    fs.mkdir(outputDirPath, (err) => {
      if (err) {
        console.error("Error during creating output dir!", err)
      }
      console.log("Directory %s was created", outputDirPath);
    });

  } else {
    console.log("Directory %s already exist", outputDirPath);
  }
}

async function createFileAndPackDir() {
  fs.writeFile(path.join(outputDirPath, filename), "Hello World!", (err) => {
    if (err) {
      console.error("Error during creating creating file!", err)
    }
    console.log("Writing 'Hello World' > " + filename);
  });
}

async function packOutputDirectory() {
  try {
    zipper.sync.zip(output).compress().save(result);
    console.log("Generating zip %s finished successfully!", result);
  } catch (error) {
    console.error("Error during packing directory to zip!", err)
  }
}

async function packOutputDirectory() {
  var buffer = await zipdir(outputDirPath);

  zipdir(outputDirPath, { saveTo: result }, (err, buffer) => {
    if (err) {
      console.error("Error during packing directory to zip!", err)
    }
    console.log("Generating zip %s finished successfully!", result);
  })
}

