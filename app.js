#!/usr/bin/env node

// 'use strict';
const UTILS = './utils';
const TemplateGenerator = require(`${UTILS}/dirFiles`);
const PARAMETERS = require(`${UTILS}/parametrosEspeciales`);
const consola = require(`${UTILS}/consola`);
const mensaje = require(`${UTILS}/mensajes`);
const URL_TEMPLATE = require(`${UTILS}/rutasTemplate`);

const ParametersArray = process.argv.slice(2);
let ParametersApp ={
	nameApp: ParametersArray[0],
	specials: ParametersArray.filter(param => param.includes('--'))
}

// consola.info("Parametros especiales:");
// consola.info(ParametersApp.specials);

// consola.info("Nombre de la App:")
// consola.info(ParametersApp.nameApp);


const LOCAL_PATH = `${process.cwd()}/${ParametersApp.nameApp}/`;

let FOLDER_TEMPLATE_TO_CREATE = null;
ParametersApp.specials.forEach(param=>{
	switch(param){
		case PARAMETERS.CRA:
				FOLDER_TEMPLATE_TO_CREATE= URL_TEMPLATE.CRA;
			break;
		case PARAMETERS.HELP:
				consola.info(mensaje.HELP_MSG);
			break;
		case PARAMETERS.VERSION:
				consola.info(mensaje.VERSION);
			break;
		default:
			consola.error(mensaje.PARAM_NOT_FOUND(param));
			break
	}
	
});

if(FOLDER_TEMPLATE_TO_CREATE !== null){
	const TEMPLATE_PATH = `${__dirname}/templates/${FOLDER_TEMPLATE_TO_CREATE}`;
	consola.log('Ruta Template:',TEMPLATE_PATH);
	TemplateGenerator(TEMPLATE_PATH,LOCAL_PATH);
} else if (ParametersApp.specials.length === 0){
	consola.warning(`No se recibieron parametros especiales para: ${ParametersApp.nameApp}. Vea --help`);
}