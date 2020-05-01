const fs = require('fs');
const path = require('path');
const {
	info,
	warning,
} = require(`./consola`);

const mkdir = function(dir) {
	// making directory without exception if exists
	try {
		fs.mkdirSync(dir, {recursive: true}, err => {})
		// fs.mkdirSync(dir, 0755);
	} catch(e) {
		rmdir(dir);
		if(e.code != "EEXIST") {
			throw e;
		}
	}
};

const rmdir = function(dir) {
	if (fs.existsSync(dir)) {
		var list = fs.readdirSync(dir);
		for(var i = 0; i < list.length; i++) {
			var filename = path.join(dir, list[i]);
			var stat = fs.statSync(filename);
			
			if(filename == "." || filename == "..") {
				// pass these files
			} else if(stat.isDirectory()) {
				// rmdir recursively
				rmdir(filename);
			} else {
				// rm fiilename
				fs.unlinkSync(filename);
			}
		}
		fs.rmdirSync(dir);
	} else {
		warning(`warn: ${dir} not exists`);
	}
};


const copy = function(src, dest) {
    info(`${dest} - ok.`);
	var oldFile = fs.createReadStream(src);
	var newFile = fs.createWriteStream(dest);
    oldFile.pipe(newFile);
    oldFile.on(`end`,(e)=>{
        newFile.close();
        oldFile.close();
    });
};

const copyDir = function(src, dest) {
	mkdir(dest);
	var files = fs.readdirSync(src);
	for(var i = 0; i < files.length; i++) {
		var current = fs.lstatSync(path.join(src, files[i]));
		if(current.isDirectory()) {
            copyDir(path.join(src, files[i]), path.join(dest, files[i]));
		} else if(current.isSymbolicLink()) {
			var symlink = fs.readlinkSync(path.join(src, files[i]));
            fs.symlinkSync(symlink, path.join(dest, files[i]));
		} else {
            copy(path.join(src, files[i]), path.join(dest, files[i]));
		}
    }
    return files.length;
};
const run = (src, template_path, templates)=> {
	templates.forEach(template => {
		let pathFrom = template_path + template.pathTemplate;
		let pathTo = src + template.pathCopy;

		if (!fs.existsSync(pathTo)) {
			mkdir(pathTo);
		}
		
		copyDir(pathFrom, pathTo);
	});
    //copyDir(src,dest);
    warning(`Fin de la operación. A tirar alto codigo amigo...`);//${copyDir(src,dest)} archivos copiados.`)
}
module.exports = run;