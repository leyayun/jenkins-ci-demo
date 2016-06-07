// import styles
import 'bootstrap/dist/css/bootstrap.css';
import './app.scss';

// import components modules
import config from './config';
import consts from './common/constants/';
import filters from './common/filters/';
import services from './common/services/';
import directives from './common/directives/';

// import business modules
import home from './home';

export default angular.module('app', ['ui.router', home, consts, filters, services, directives])
  .config(config)
  .name;
