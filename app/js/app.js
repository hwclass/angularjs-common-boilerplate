var angular = require('angular');
var app = angular.module('todoApp', [ 'ngRoute' ]);
 
require('./service/todos');
require('./service/imprint');
require('./controller/edit_todo');
require('./controller/todo');
require('./controller/todo_list');
require('./controller/imprint');
require('./controller/footer');