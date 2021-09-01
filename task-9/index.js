// CRUD Operation Using FS Module in NodeJs

const fs = require('fs');

const data = fs.readFileSync('aman/bio.txt','utf8');
console.log(data);

//Renaming of text file
fs.renameSync('aman/bio.txt','aman/myBio.txt')

//Deleting text file
fs.unlinkSync('aman/myBio.txt')

//Remove Folder
fs.rmdirSync('aman')