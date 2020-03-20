
/* MODULO DE MENSAJE DE AYUDA */
const package = require('../package.json');

const PARAM = require('./parametrosEspeciales');

const NAME_PACKAGE = package.name;
const README_PACKAGE = package.homepage;

const sPARAM = (param)=>{
    return `[${param}]`;
}

const COMMAND = (param,descr)=>{
    return `${sPARAM(param)} - ${descr}`;
}

const ALL_PARAMS = `${sPARAM(PARAM.CRA)} | ${sPARAM(PARAM.HELP)}`;

const HELP_MSG = `usage: ${NAME_PACKAGE} <name_app> | ${ALL_PARAMS}

descripción:
    ${COMMAND(PARAM.CRA, 'Crea una app en ReactJs.')}
    ${COMMAND(PARAM.HELP, 'Ayuda.')}

Sitio: ${README_PACKAGE}
`;

module.exports.HELP_MSG = HELP_MSG;

/* FIN MODULO DE MENSAJE DE AYUDA */

module.exports.PARAM_NOT_FOUND = (param)=>{
    return `Parametro especial incorrecto: ${param}, por favor chequear con --help`;
}
