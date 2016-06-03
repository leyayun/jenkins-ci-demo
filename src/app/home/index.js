import routing from './routes';
import HomeController from './controllers/HomeController';
import ListController from './controllers/ListController';
import DetailController from './controllers/DetailController';

export default angular.module('app.home', [])
	.config(routing)
  .controller('HomeController', HomeController)
  .controller('ListController', ListController)
  .controller('DetailController', DetailController)
  .name;