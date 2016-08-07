'use strict';

/**
 * module dependencies
 */
var fs = require( 'fs' );

/**
 * determines whether or not a file exists on the given `filePath`
 *
 * @param {string} filePath
 * @returns {boolean}
 */
module.exports = function fileExists( filePath ) {
  try {
    return fs.statSync( filePath ).isFile();
  } catch ( err ) {
    return false;
  }
};
