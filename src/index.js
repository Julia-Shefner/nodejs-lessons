// const message = 'Hello Node';
// console.log(message);

// const message1 = 'Hello world';
// console.log(message1);

// * Модуль path
// import path from 'node:path';

// const somePath = path.join('some_folder', 'some_file.txt');
// console.log(somePath);

// const pathToWorkDir = path.join(process.cwd());
// const pathToFile = path.join(pathToWorkDir, 'some_folder', 'some_file.txt');
// console.log(pathToFile);

// console.log(path.parse('C:\\path\\dir\\file.txt'));

// * Модуль fs
// import fs from 'node:fs';

//! мусить бути файл file.txt у структурі файлів, щоб його можна було читати

// const buffer = fs.readFileSync('file.txt');
// console.log(buffer);

// const data = fs.readFileSync('file.txt', 'utf8');
// console.log('Вміст файлу:', data);

// import fs from 'node:fs/promises';

// const buffer = await fs.readFile('file.txt');
// console.log(buffer);

// const data = await fs.readFile('file.txt', 'utf8');
// console.log(data);

// import fs from 'node:fs';

// fs.writeFileSync('output.txt', 'Привіт з Node.js!', 'utf8');

// import fs from 'node:fs/promises';

// await fs.writeFile('output.txt', 'Ще раз привіт з  Node.js!', 'utf8');
// await fs.appendFile('output.txt', '\nЩе один рядок', 'utf8');
// console.log('Дані успішно записані у файл.');

// import fs from 'node:fs/promises';

// await fs.writeFile('delete.txt', 'This file is test', 'utf8');
// console.log('File added');
// await fs.rename('delete.txt', 'toDelete.txt');
// console.log('Renamed');
// await fs.unlink('toDelete.txt');
// console.log('Deleted');
