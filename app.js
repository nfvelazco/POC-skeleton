#!/usr/bin/env node

// 'use strict';

const copyDir = require('./utils/dirFiles.js');

const NAME_APP = process.argv.slice(2)[0];
const TYPE_APP = process.argv.slice(2)[1];

console.log(TYPE_APP);

const NEW_PATH = `${process.cwd()}/${NAME_APP}/`;
const TEMPLATE_PATH = `${__dirname}/templates/cra/`;

copyDir(TEMPLATE_PATH,NEW_PATH);