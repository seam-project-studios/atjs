exports.build = require('./build');
exports.dev = require('./dev');
exports.i18n = require('./i18n');
exports.server = require('./express');
exports.osiris = require('./osiris');
exports.osirisCMS = require('./osiris-cms');

const dev = require('./dev');

dev(8080)