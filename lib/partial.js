'use strict';

// MODULES //

var betaFun = require( 'compute-beta' );


// FUNCTIONS //

var abs = Math.abs;


// CONSTANTS //

var EPSILON = 1e-12;


// PARTIAL //

/**
* FUNCTION: partial( alpha, beta )
*	Partially applies first shape parameter `alpha` and second shape parameter `beta` and returns a function for evaluating the moment-generating function (MGF) for a beta distribution.
*
* @param {Number} alpha - first shape parameter
* @param {Number} beta - second shape parameter
* @returns {Function} MGF
*/
function partial( alpha, beta ) {
	var betaFunDenom = betaFun( alpha, beta );
	/**
	* FUNCTION: mgf( t )
	*	Evaluates the moment-generating function (MGF) for a beta distribution.
	*
	* @private
	* @param {Number} t - input value
	* @returns {Number} evaluated MGF
	*/
	return function mgf( t ) {
		var sum = 1,
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
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
