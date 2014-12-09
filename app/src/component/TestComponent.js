/**
 * @name TestComponent
 * @desc Component for Test
 */

'use strict';

var TestComponent = function () {
  return {
    template: 'Name: {{name}} Surname : {{surName}} Address: {{address}}'
  };
};

module.exports = TestComponent;