'use strict';

// MODULES //

var partial = require( './partial.js' );


// MGF //

/**
* FUNCTION: ( out, arr, alpha, beta, accessor )
*	Evaluates the moment-generating function (MGF) for a beta distribution with first shape parameter `alpha` and second shape parameter `beta` using an accessor function.
*
* @param {Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} out - output array
* @param {Array} arr - input array
* @param {Number} alpha - first shape parameter
* @param {Number} beta - second shape parameter
* @param {Function} accessor - accessor function for accessing array values
* @returns {Number[]|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} output array
*/
function mgf( y, x, alpha, beta, clbk ) {
	var len = x.length,
		fcn,
		v, i;

	fcn = partial( alpha, beta );
	for ( i = 0; i < len; i++ ) {
		v = clbk( x[ i ], i );
		if ( typeof v === 'number' ) {
			y[ i ] = fcn( v );
		} else {
			y[ i ] = NaN;
		}
	}
	return y;
} // end FUNCTION mgf()


// EXPORTS //

module.exports = mgf;
