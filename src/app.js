// import styles
import './app.scss';

// 生成模板
require('./layout/navigation.html');

// import components modules
import config from './config';
import run from './run';
import consts from './common/constants/';
import filters from './common/filters/';
import services from './common/services/';
import directives from './common/directives/';

// import business modules
import home from './home';

export default angular.module('app', ['ui.router', home, consts, filters, services, directives])
  .config(config)
  // .run(run)
  .name;
