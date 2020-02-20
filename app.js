const fs = require('fs');

const createDir = (dirPath) => {
    fs.mkdirSync(dirPath,{recursive:true},(error)=>{
        if(error){
            console.error('Creando carpeta Error: ', error);
        }else{
            console.log(`El directorio: ${dirPath}. Se creó con exito!`)
        }
    });
}

const createFile = (filePath,fileContent) => {
    // fs.writeFileSync()
    fs.appendFile(filePath,fileContent,(error)=>{
        if(error){
            console.error('Creando archivo Error: ', error);
        }else{
            console.log(`El archivo: ${filePath}. Se creó con exito!`)
        }
    });
}

const PATH = `${process.cwd}/themp/carpeta/`;
const CONTENT = 'Contenido uno';

createDir(PATH);
createFile(`${PATH}${process.argv.slice(2)[0]}`,CONTENT);