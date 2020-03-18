#!/usr/bin/env node

// 'use strict';
const UTILS = './utils';
const copyDir = require(`${UTILS}/dirFiles`);
const PARAMETERS = require(`${UTILS}/parametrosEspeciales`);
const COLOR = require(`${UTILS}/consoleColors`);

const ParametersArray = process.argv.slice(2);
let ParametersApp ={
	nameApp: ParametersArray[0],
	specials: ParametersArray.filter(param => param.includes('--'))
}

console.log(COLOR.FgGreen,"Parametros especiales:");
console.log(ParametersApp.specials);
console.log(COLOR.Reset);
console.log(COLOR.FgGreen,"Nombre de la App:")
console.log(ParametersApp.nameApp);
console.log(COLOR.Reset);

const LOCAL_PATH = `${process.cwd()}/${ParametersApp.nameApp}/`;

let FOLDER_TEMPLATE_TO_CREATE = null;
ParametersApp.specials.forEach(param=>{
	switch(param){
		case PARAMETERS.CRA:
				FOLDER_TEMPLATE_TO_CREATE= 'cra';
			break;
		case PARAMETERS.HELP:
				console.log(COLOR.FgCyan,'Activaste Help papa!!!');
				console.log(COLOR.Reset);
			break;
		default:
			const msgError = `Parametro especial incorrecto: ${param}, por favor chequear con --help`;
			console.log(COLOR.BgRed, msgError)
			console.log(COLOR.Reset);
			//throw msgError;
			break
	}
	
});

if(FOLDER_TEMPLATE_TO_CREATE != null){
const TEMPLATE_PATH = `${__dirname}/templates/${FOLDER_TEMPLATE_TO_CREATE}/`;
console.log('Ruta Template:',TEMPLATE_PATH);
// copyDir(TEMPLATE_PATH,LOCAL_PATH);
}