
//Q1
/*
import { writeFile } from 'fs';
const text = process.argv[2];
if (!text) {
    console.error('Error: Please provide text as parameter.');
    console.log('Usage: node exo4.js "Your text here"');
    process.exit(1);
}

writeFile('f.txt', text, 'utf8', (err) => {
    if (err) {
        console.error('Error creating file:', err.message);
        process.exit(1);
    }
    console.log('The file has been saved!');
});
*/
//Q2
//node exo4.js destination.txt "modified Q1."
/*
import { writeFile } from 'fs';
const fileName = process.argv[2];
const text = process.argv[3];
if (!fileName || !text) {
    console.error('Error: Please provide both filename and text.');
    console.log('Usage: node exo4.js <filename> "Your text here"');
    process.exit(1);
}
writeFile(fileName, text, 'utf8', (err) => {
    if (err) {
        console.error('Error creating file:', err.message);
        process.exit(1);
    }
    console.log('The file has been saved!');
});
*/

//Q3
import { writeFile, readFile } from 'fs';

const fileName = process.argv[2];
const text = process.argv[3];
if (!fileName || !text) {
    console.error('Error: Please provide both filename and text.');
    console.log('Usage: node exo4.js <filename> "Your text here"');
    process.exit(1);
}
function createFileAndDisplay(filename, content) {
    writeFile(filename, content, 'utf8', (writeErr) => {
        if (writeErr) {
            console.error('Error creating file:', writeErr.message);
            process.exit(1);
        }
        
        console.log('The file has been saved!');
        readFile(filename, 'utf8', (readErr, data) => {
            if (readErr) {
                console.error('Error reading file:', readErr.message);
                process.exit(1);
            }
            
            console.log('File contents:');
            console.log(data);
        });
    });
}
createFileAndDisplay(fileName, text);