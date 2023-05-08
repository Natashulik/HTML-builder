const fs = require('fs');
const path = require('path');

const pathStyle = path.join(__dirname, 'styles');   
const pathBundle = path.join(__dirname, 'project-dist', 'bundle.css');

let result ='';

async function createFile() {
    const allFiles = await fs.promises.readdir(pathStyle);
    const cssFiles = allFiles.filter((item, index, array) => path.extname(item) == '.css');

    for (const elem of cssFiles) {
      const elemPath = path.join(pathStyle, elem);
      const text = await fs.promises.readFile(elemPath, 'utf8');
      result = result + text;
    }
 // console.log(result)
 
  let data = await fs.promises.writeFile(pathBundle, result);

  }
 
  createFile();

  