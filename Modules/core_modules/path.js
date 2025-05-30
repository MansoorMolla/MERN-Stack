/*
The Path module provides a way of working with directories and file paths.

var path = require('path');

Path Properties and Methods:

Method	        Description
basename()	    Returns the last part of a path
delimiter	    Returns the delimiter specified for the platform
dirname()	    Returns the directories of a path
extname()	    Returns the file extension of a path
format()	    Formats a path object into a path string
isAbsolute()	Returns true if a path is an absolute path, otherwise false
join()	        Joins the specified paths into one
normalize() 	Normalizes the specified path
parse()	        Formats a path string into a path object
posix	        Returns an object containing POSIX specific properties and methods
relative()	    Returns the relative path from one specified path to another specified path
resolve()	    Resolves the specified paths into an absolute path
sep	            Returns the segment separator specified for the platform
win32	        Returns an object containing Windows specific properties and methods


*/


var path = require('path');
var filename = path.basename('/Users/Refsnes/demo_path.js');
console.log(filename);



// Why not just use strings like './file.txt' for paths?
// Paths written as strings (like './file.txt') can work, but they aren’t portable or safe across different operating systems.

// Different OS use different path separators:

// Windows uses backslash \

// Linux/macOS use forward slash /

// For example:

// 'folder/file.txt' works on Linux/macOS

// But on Windows, it should be 'folder\\file.txt'

// What does path module do?
// It handles these OS differences automatically — so your code works everywhere without you worrying about slashes.

// It builds, normalizes, and resolves paths so you don’t have to manually concatenate strings.

// It prevents bugs related to wrong or malformed paths.

// Helps you get file names, extensions, or directories easily without string parsing