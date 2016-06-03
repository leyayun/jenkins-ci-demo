import routing from './routes';
import HomeCtrl from './controllers/HomeCtrl';
import ListCtrl from './controllers/ListCtrl';
import DetailCtrl from './controllers/DetailCtrl';

export default angular.module('app.home', [])
  .config(routing)
  .controller('HomeCtrl', HomeCtrl)
  .controller('ListCtrl', ListCtrl)
  .controller('DetailCtrl', DetailCtrl)
  .name;
