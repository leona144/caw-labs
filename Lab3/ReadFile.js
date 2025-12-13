import { readFile } from 'fs';

const text = process.argv[2];
//This line gets the third item from the array process.argv and stores it in the constant variable text.
//node ReadFile.js myFile.txt
//process.argv === ['node', 'ReadFile.js', 'myFile.txt']


if (!text) {
    console.log('Usage: node ReadFile.js <filename>');
    process.exit(1);
}

readFile(text, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
    console.log(data);
});