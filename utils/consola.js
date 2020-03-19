const Reset = "\x1b[0m";
const Bright = "\x1b[1m";
const Dim = "\x1b[2m";
const Underscore = "\x1b[4m";
const Blink = "\x1b[5m";
const Reverse = "\x1b[7m";
const Hidden = "\x1b[8m";

const FgBlack = "\x1b[30m";
const FgRed = "\x1b[31m";
const FgGreen = "\x1b[32m";
const FgYellow = "\x1b[33m";
const FgBlue = "\x1b[34m";
const FgMagenta = "\x1b[35m";
const FgCyan = "\x1b[36m";
const FgWhite = "\x1b[37m";

const BgBlack = "\x1b[40m";
const BgRed = "\x1b[41m";
const BgGreen = "\x1b[42m";
const BgYellow = "\x1b[43m";
const BgBlue = "\x1b[44m";
const BgMagenta = "\x1b[45m";
const BgCyan = "\x1b[46m";
const BgWhite = "\x1b[47m";

const endColor = '%s\x1b[0m';

const _Reset = `${Reset}`;
const _Bright = `${Bright}${endColor}`;
const _Dim = `${Dim}${endColor}`;
const _Underscore = `${Underscore}${endColor}`;
const _Blink = `${Blink}${endColor}`;
const _Reverse = `${Reverse}${endColor}`;
const _Hidden = `${Hidden}${endColor}`;
const _FgBlack = `${FgBlack}${endColor}`;
const _FgRed = `${FgRed}${endColor}`;
const _FgGreen = `${FgGreen}${endColor}`;
const _FgYellow = `${FgYellow}${endColor}`;
const _FgBlue = `${FgBlue}${endColor}`;
const _FgMagenta = `${FgMagenta}${endColor}`;
const _FgCyan = `${FgCyan}${endColor}`;
const _FgWhite = `${FgWhite}${endColor}`;
const _BgBlack = `${BgBlack}${endColor}`;
const _BgRed = `${BgRed}${endColor}`;
const _BgGreen = `${BgGreen}${endColor}`;
const _BgYellow = `${BgYellow}${endColor}`;
const _BgBlue = `${BgBlue}${endColor}`;
const _BgMagenta = `${BgMagenta}${endColor}`;
const _BgCyan = `${BgCyan}${endColor}`;
const _BgWhite = `${BgWhite}${endColor}`;


module.exports.log = (msg)=>{
    console.log(msg);
}

module.exports.warning = (msg)=>{
    console.log(_FgYellow, msg);
    console.log(_Reset);
}

module.exports.info = (msg)=>{
    console.log(_FgCyan, msg);
    console.log(_Reset);
}

module.exports.error = (msg)=>{
    console.log(_BgRed, msg);
    console.log(_Reset);
}