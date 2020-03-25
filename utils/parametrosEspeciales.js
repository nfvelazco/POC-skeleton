
const consola = require(`./consola`);
const mensaje = require(`./mensajes`);
const URL_TEMPLATE = require(`./rutasTemplate`);

const CRA = '--cra';
const HELP = '--help';
const VERSION = '--version';


module.exports.TYPE_DEFAULR = CRA;
module.exports.CRA = CRA;
module.exports.HELP = HELP;
module.exports.VERSION = VERSION;

module.exports.GET_LIST_PARAMS = (lParameters)=>{
    return lParameters.filter(param => param.includes('--'))
}

module.exports.GET_URL_TEMPLATE = (lParameters) =>{
    let result = null;
    lParameters.forEach(param=>{
        switch(param){
            case CRA:
                    result = URL_TEMPLATE.CRA;
                break;
            case HELP:
                    consola.info(mensaje.HELP_MSG);
                break;
            case VERSION:
                    consola.info(mensaje.VERSION);
                break;
            default:
                consola.error(mensaje.PARAM_NOT_FOUND(param));
                break
        }
        if(result!=null){return result;}
    });
    return result;
}
