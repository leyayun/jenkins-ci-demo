routing.$inject = ['$stateProvider'];
export default function routing($stateProvider) {
  // "ngInject";

  $stateProvider
    .state('home', {
      url: '/',
      template: require('./templates/home.html'),
      controller: 'HomeCtrl',
      controllerAs: 'home'
    })
    .state('list', {
      url: '/list',
      template: require('./templates/list.html'),
      controller: 'ListCtrl',
      controllerAs: 'list'
    })
    .state('detail', {
      url: '/detail/:id',
      template: require('./templates/detail.html'),
      controller: 'DetailCtrl',
      controllerAs: 'detail'
    });
}
