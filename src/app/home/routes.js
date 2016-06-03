routing.$inject = ['$stateProvider'];
export default function routing($stateProvider) {
	// "ngInject";

  $stateProvider
    .state('home', {
      url: '/',
      template: require('./templates/home.html'),
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .state('list', {
      url: '/list',
      template: require('./templates/list.html'),
      controller: 'ListController',
      controllerAs: 'list'
    })
    .state('detail', {
      url: '/detail/:id',
      template: require('./templates/detail.html'),
      controller: 'DetailController',
      controllerAs: 'detail'
    });
}