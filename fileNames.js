

// List out the files in your current working directory, one file per line,
// into a file with: ls -la > dirlist.txt. Verify you have a new file dirlist.txt,
// that has something analog in it:
//
// drwxr-xr-x  10 peterlada  staff    340 Sep 20 23:32 .
// drwxr-xr-x  14 peterlada  staff    476 Oct  9 10:55 ..
// -rw-r--r--@  1 peterlada  staff   6148 Sep 18 22:16 .DS_Store
// drwxr-xr-x  16 peterlada  staff    544 Oct  9 11:52 .git
// -rw-r--r--   1 peterlada  staff     37 Sep 14 21:17 .gitignore
// ...
//
// Write code that loads this file into a string and console logs out all the filenames,
// after splitting the rows and the columns.



var fs = require("fs");

var data = fs.readFile("dirlist.txt", function(err, data) {
  if (err) {
    console.log(err);
  }
  var toString = data.toString();
  var array = toString.split("\n");
  function fileNames(array) {
    for (var i = 1; i < array.length-2; i++) {
      var str = array[i];
      var subArray = str.split("\n");
      var subArray2 = subArray[0].split(" ");
      var fileName = subArray2[subArray2.length -1];
      console.log(fileName);
    }
  }
  fileNames(array);
})
