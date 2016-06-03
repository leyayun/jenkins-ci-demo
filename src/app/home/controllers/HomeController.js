export default class HomeController  {
  constructor($scope, $state) {
	  // "ngInject";
		this.title = 'A new workflow with angular,webpack and es6.';

		$scope.goAhead = function() {
			$state.go('list');
		};
  }
}
HomeController.$inject = ['$scope', '$state'];
