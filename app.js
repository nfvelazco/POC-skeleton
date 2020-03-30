#!/usr/bin/env node

'use strict';
const UTILS = './utils';
const TemplateGenerator = require(`${UTILS}/importTemplate`);
const PARAMETERS = require(`${UTILS}/parametrosEspeciales`);
const PAREMETERS_UTILS = require(`${UTILS}/parametrosEspecialesUtils`);
const consola = require(`${UTILS}/consola`);
const utils = require(`${UTILS}/utils`);

const ParametersArray = process.argv.slice(2);

let ParametersApp = {
	nameApp: ParametersArray[0],
	specials: PAREMETERS_UTILS.GET_LIST_PARAMS(ParametersArray).toLower().distinct()
};

const LOCAL_PATH = `${process.cwd()}/${ParametersApp.nameApp}/`;

if (ParametersApp.specials.length === 0) {
	consola.warning(`No se recibieron parametros especiales para: ${ParametersApp.nameApp}. Vea --help`);
} else {
	let FOLDERS_TEMPLATE_TO_CREATE = PAREMETERS_UTILS.GET_URL_TEMPLATES(ParametersApp.specials);
	if (FOLDERS_TEMPLATE_TO_CREATE.length !== 0) {
		const TEMPLATE_PATH = `${__dirname}/templates/`;
		FOLDERS_TEMPLATE_TO_CREATE.forEach(template => {
			let pathFrom = TEMPLATE_PATH + template.pathTemplate;
			let pathTo = LOCAL_PATH + template.pathCopy;
			TemplateGenerator(pathFrom, pathTo);
			
		});
	}
} 
