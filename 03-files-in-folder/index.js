const fs = require('fs');
const path = require('path');
const path_dir = path.join(__dirname, 'secret-folder');

let promise = fs.promises.readdir(path_dir, {withFileTypes: true});
promise.then(data=> {
    for (elem of data) {
      const elemPath = path.join(__dirname, 'secret-folder', elem.name);
      const elemName = path.basename(elemPath).split('.')[0];
      const elemExt = path.extname(elemPath).split('.').join('');
      const elemParse = path.parse(elemPath);  
      fs.promises.stat(elemPath).then(data => {
        if (data.isFile()) {
          let size = (data.size / 1024).toFixed(3);
          console.log(`${elemName}-${elemExt}-${size}kb`);
        //  console.log(`${elemParse.name}-${elemParse.ext.split('.').join('')}-${size}kb`);   2-й способ 
        }
         });
    }}
);
           