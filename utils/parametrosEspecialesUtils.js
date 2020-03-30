const CONSOLA = require(`./consola`);
const MENSAJES = require(`./mensajes`);
const TEMPLATES = require(`./proyectTemplate`);
const PARAMETERS = require(`./parametrosEspeciales`);

module.exports.GET_LIST_PARAMS = (lParameters) => {
    return lParameters.filter(param => param.includes('--'));
};

module.exports.GET_URL_TEMPLATES = (lParameters) =>{
    let result = [];
    let allParamsOK = true;
    lParameters.forEach(param => {
        switch(param){
            case PARAMETERS.CRA:
                result.push(TEMPLATES.CRA);
                break;
            case PARAMETERS.NET_COMMON:
                result.push(TEMPLATES.NET_COMMON);
                break;
            case PARAMETERS.HELP:
                allParamsOK = false;
                CONSOLA.info(MENSAJES.HELP_MSG);
                break;
            case PARAMETERS.VERSION:
                allParamsOK = false;
                CONSOLA.info(MENSAJES.VERSION);
                break;
            default:
                allParamsOK = false;
                CONSOLA.error(MENSAJES.PARAM_NOT_FOUND(param));
                break
        }
    });

    return allParamsOK ?
        result : 
        [];  
};