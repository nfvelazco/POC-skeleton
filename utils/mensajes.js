
/* MODULO DE MENSAJE DE AYUDA */
const package = require('../package.json');

const PARAM = require('./parametrosEspeciales');

const PACKAGE_NAME = package.name;
const PACKAGE_README = package.homepage;
const PACKAGE_VERSION = package.version;

const sPARAM = (param)=> {
    return `[${param}]`;
};

const COMMAND = (param,descr)=>{
    return `${sPARAM(param)} - ${descr}`;
};

const ALL_PARAMS = `${sPARAM(PARAM.CRA)} | ${sPARAM(PARAM.HELP)}`;

const HELP_MSG = `usage: ${PACKAGE_NAME} <name_app> | ${ALL_PARAMS}

descripción:
    ${COMMAND(PARAM.CRA, 'Crea una app en ReactJs.')}
    ${COMMAND(PARAM.NET_COMMON, 'Agrega a la solución .NET un proyecto con utils.')}
    ${COMMAND(PARAM.HELP, 'Ayuda.')}
    Sitio: ${PACKAGE_README}
`;

module.exports.HELP_MSG = HELP_MSG;

const VERSION = `v${PACKAGE_VERSION}`;
module.exports.VERSION = VERSION;


/* FIN MODULO DE MENSAJE DE AYUDA */

module.exports.PARAM_NOT_FOUND = (param)=>{
    return `Parametro especial incorrecto: ${param}, por favor chequear con --help`;
}
