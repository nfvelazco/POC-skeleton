#!/usr/bin/env node

'use strict';
const UTILS = './utils';
const TemplateGenerator = require(`${UTILS}/importTemplate`);
const PARAMETERS = require(`${UTILS}/parametrosEspeciales`);
const consola = require(`${UTILS}/consola`);

const ParametersArray = process.argv.slice(2);
let ParametersApp ={
	nameApp: ParametersArray[0],
	specials: PARAMETERS.GET_LIST_PARAMS(ParametersArray)
}

const LOCAL_PATH = `${process.cwd()}/${ParametersApp.nameApp}/`;

let FOLDER_TEMPLATE_TO_CREATE = PARAMETERS.GET_URL_TEMPLATE(ParametersApp.specials);

if(FOLDER_TEMPLATE_TO_CREATE !== null){
	const TEMPLATE_PATH = `${__dirname}/templates/${FOLDER_TEMPLATE_TO_CREATE}`;
	TemplateGenerator(TEMPLATE_PATH,LOCAL_PATH);
} else if (ParametersApp.specials.length === 0){
	consola.warning(`No se recibieron parametros especiales para: ${ParametersApp.nameApp}. Vea --help`);
}