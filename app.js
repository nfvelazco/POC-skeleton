#!/usr/bin/env node

// 'use strict';
const UTILS = './utils';
const copyDir = require(`${UTILS}/dirFiles`);
const PARAMETERS = require(`${UTILS}/parametrosEspeciales`);
const consola = require(`${UTILS}/consola`);

const ParametersArray = process.argv.slice(2);
let ParametersApp ={
	nameApp: ParametersArray[0],
	specials: ParametersArray.filter(param => param.includes('--'))
}

consola.info("Parametros especiales:");
consola.info(ParametersApp.specials);

consola.info("Nombre de la App:")
consola.info(ParametersApp.nameApp);


const LOCAL_PATH = `${process.cwd()}/${ParametersApp.nameApp}/`;

let FOLDER_TEMPLATE_TO_CREATE = null;
ParametersApp.specials.forEach(param=>{
	switch(param){
		case PARAMETERS.CRA:
				FOLDER_TEMPLATE_TO_CREATE= 'cra';
			break;
		case PARAMETERS.HELP:
				consola.info('Activaste Help papa!!!');
			break;
		default:
			const msgError = `Parametro especial incorrecto: ${param}, por favor chequear con --help`;
			consola.error(msgError)
			break
	}
	
});

if(FOLDER_TEMPLATE_TO_CREATE != null){
const TEMPLATE_PATH = `${__dirname}/templates/${FOLDER_TEMPLATE_TO_CREATE}/`;
consola.log('Ruta Template:',TEMPLATE_PATH);
// copyDir(TEMPLATE_PATH,LOCAL_PATH);
}