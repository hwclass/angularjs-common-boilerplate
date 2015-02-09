/**
 * @name TestComponent
 * @desc Component for Test
 */

'use strict';

/**
* @name TestComponent
* @ref TestComponent
* @desc Does something awesome
* @returns template
*/
var TestComponent = function () {
  return {
    template: 'Name: {{name}} Surname : {{surName}} Address: {{address}}'
  };
};

module.exports = TestComponent;