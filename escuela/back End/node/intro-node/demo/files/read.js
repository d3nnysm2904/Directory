const fs = require("fs");

fs.readFile(path, encoding, callback);

// path:path to file
// encoding: hot to interpret file
//   for txt files ,this is almost always'utf8
//   for binary files (like an img )omit this argument
// callback: function that takes error and data

fs.readFile("myFile.txt", "utf8", (err, data) => {
  if (err) {
    // handle possible error
    console.error(err);
    // kill the process and tell the shell it errored
    process.exit(1);
  }
  // otherwise success
  console.log(`file contents: ${data}`);
});

console.log("reading file");
// file won't have been read yet at this point
