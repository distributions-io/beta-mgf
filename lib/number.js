'use strict';

// MODULES //

var betaFun = require( 'compute-beta' );


// FUNCTIONS //

var abs = Math.abs;


// CONSTANTS //

var EPSILON = 1e-12;


// MGF //

/**
* FUNCTION: mgf( x, alpha, beta )
*	Evaluates the moment-generating function (MGF) for a beta distribution with first shape parameter `alpha` and second shape parameter `beta` at a value `t`.
*
* @param {Number} t - input value
* @param {Number} alpha - first shape parameter
* @param {Number} beta - second shape parameter
* @returns {Number} evaluated MGF
*/
function mgf( t, alpha, beta ) {
	var sum = 1,
		betaFunDenom = betaFun( alpha, beta ),
		summand,
		c = 1,
		k = 1;

	do {
		c *= t / k;
		summand = ( betaFun( alpha + k, beta ) / betaFunDenom ) * c;
		sum += summand;
		k += 1;
	} while ( abs( summand / sum ) >= EPSILON );

	return sum;
} // end FUNCTION mgf()


// EXPORTS //

module.exports = mgf;
