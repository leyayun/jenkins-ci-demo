export default ($urlRouterProvider, $locationProvider, $stateProvider) => {
	"ngInject";
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/dashboards/home');

  $stateProvider

      .state('dashboards', {
          abstract: true,
          url: "/dashboards",
          template: require('./layout/content.html')
      })
}
