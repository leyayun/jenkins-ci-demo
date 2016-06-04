export default class HomeCtrl {
  constructor($scope, $state) {
    "ngInject";
    this.title = 'A new workflow with angular,webpack and es6.';

    $scope.goAhead = function() {
      $state.go('list');
    };
  }
}
