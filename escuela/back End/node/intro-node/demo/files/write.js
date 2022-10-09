const fs = require("fs");

const content = "THIS WILL GO IN THE FILE!";

// fs.writeFile(path,data,encoding,callback)
// path:path to the file
// data:data to output to file (typically a string )
// encoding:how to write file
//   for text files, this is almost always 'utf8'
//   for binary files(like an image)omit this argument
// callback function that takes error

fs.writeFile(
  "./files/output.txt",
  content,
  { encoding: "utf8", flag: "a" },
  (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log("Successfully wrote to file!");
  }
);

console.log("writing file...");
// file won't have been written yet at this point
// \n -new line
fs.appendFile("./files/output.txt", "\n append me", "utf8", (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("Successfully wrote to file!");
});

console.log("writing file...");
