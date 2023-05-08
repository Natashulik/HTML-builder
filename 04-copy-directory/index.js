const fs = require('fs');
const path = require('path');

const pathFile = path.join(__dirname, 'files');   
const pathCopy = path.join(__dirname, 'files-copy');  

function copyDir() {
   fs.mkdir(pathCopy, { recursive: true }, () => {

    let promise = fs.promises.readdir(pathFile, { withFileTypes: true });
    promise.then(data => {
        for (let elem of data) {
            let path1 = path.join(pathFile, elem.name);
            let path2 = path.join(pathCopy, elem.name);
        
            {fs.copyFile(path1, path2, (error) => {
                if (error) throw err;
              });
            }}
    }).catch(error=> console.log('Directory ist'));
    });
  };

copyDir()

