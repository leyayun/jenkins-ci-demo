export default function routing($stateProvider) {
  "ngInject";

  $stateProvider
    .state('dashboards.home', {
      url: '/home',
      template: require('./templates/home.html'),
      controller: 'HomeCtrl',
      controllerAs: 'home'
    })
    .state('dashboards.list', {
      url: '/list',
      template: require('./templates/list.html'),
      controller: 'ListCtrl',
      controllerAs: 'list'
    })
    .state('dashboards.detail', {
      url: '/detail/:id',
      template: require('./templates/detail.html'),
      controller: 'DetailCtrl',
      controllerAs: 'detail'
    });
}
