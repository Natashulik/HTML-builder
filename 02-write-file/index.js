const fs = require('fs');
const path = require('path');

const file_path = path.join(__dirname, 'text.txt');
const { stdin, stdout } = process;

stdout.write('Ваш любимый фильм?\n');

stdin.on('data', data => {
  const info = data.toString().trim();
  
if (info !== 'exit') {
   fs.appendFile(file_path, info + ' ', err => {
        if (err) throw err;
        stdout.write('Какой еще фильм Вам нравится?\n');
      });
} else  {
    stdout.write('Спасибо за информацию, до свидания.');
    process.exit();
 }
  process.on('SIGINT', () => {
    stdout.write('Спасибо за информацию, до свидания.');
    process.exit();
  });

});