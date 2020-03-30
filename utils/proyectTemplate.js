const ProyectTemplate = require(`../classes/ProyectTemplate.js`);

const PATH_FRONT = 'frontend/';
const PATH_BACK = 'backend/';

const PATH_CRA_FROM = 'cra/';
const PATH_CRA_TO = 'app/';
const PATH_NET_COMMON_FROM = 'Snoop.Common/';
const PATH_NET_COMMON_TO = 'Snoop.Common';


const CRA = new ProyectTemplate(PATH_CRA_FROM, PATH_FRONT + PATH_CRA_TO );
const NET_COMMON = new ProyectTemplate(PATH_NET_COMMON_FROM, PATH_BACK  + PATH_NET_COMMON_TO);

module.exports.CRA = CRA;
module.exports.NET_COMMON = NET_COMMON;