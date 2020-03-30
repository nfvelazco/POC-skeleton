#!/usr/bin/env node

'use strict';
const UTILS = './utils';
const TEMPLATE_PATH = `${__dirname}/templates/`;
const TemplateGenerator = require(`${UTILS}/importTemplate`);
const PARAMETERS = require(`${UTILS}/parametrosEspeciales`);
const PAREMETERS_UTILS = require(`${UTILS}/parametrosEspecialesUtils`);
const consola = require(`${UTILS}/consola`);
const utils = require(`${UTILS}/utils`);

const ParametersArray = process.argv.slice(2);

let ParametersApp = {
	nameApp: ParametersArray[0],
	specials: PAREMETERS_UTILS.GET_LIST_PARAMS(ParametersArray)
};

const LOCAL_PATH = `${process.cwd()}/${ParametersApp.nameApp}/`;

if (ParametersApp.specials.length === 0) {
	consola.warning(`No se recibieron parametros especiales para: ${ParametersApp.nameApp}. Vea --help`);
} else {
	let TEMPLATES_TO_CREATE = PAREMETERS_UTILS.GET_URL_TEMPLATES(ParametersApp.specials);
	if (TEMPLATES_TO_CREATE.length !== 0) {
		TemplateGenerator(LOCAL_PATH, TEMPLATE_PATH, TEMPLATES_TO_CREATE);
	}
} 
