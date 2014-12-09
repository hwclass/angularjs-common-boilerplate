/**
 * @name TestComponent
 * @desc TestComponent component
 */

'use strict';

var TestComponent = function () {
  return {
    template: 'Name: {{name}} Surname : {{surName}} Address: {{address}}'
  };
};

module.exports = TestComponent;