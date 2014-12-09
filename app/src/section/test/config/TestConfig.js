'use strict';

module.exports = {
  title : 'Weather Situations in the Cities',
  cities : [
    {city : 'Istanbul', prefix : 'tr'},
    {city : 'Berlin', prefix : 'de'},
    {city : 'Amsterdam', prefix : 'nl'},
    {city : 'Tokyo', prefix : 'jp'},
    {city : 'Van', prefix : 'tr'}
  ],
  getTitle : function () {
    return this.title;
  },
  getCities : function () {
    return this.cities;
  }
};