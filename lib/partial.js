'use strict';

// FUNCTIONS //


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

	/**
	* FUNCTION: mgf( t )
	*	Evaluates the moment-generating function (MGF) for a beta distribution.
	*
	* @private
	* @param {Number} t - input value
	* @returns {Number} evaluated MGF
	*/
	return function mgf( t ) {

	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
