export default class DetailCtrl {
  constructor($scope, TOPICS, $filter, $stateParams, user) {
    // "ngInject";

    $scope.topic = $filter('find')(TOPICS, Number($stateParams.id));

    this.loadMeizi = function() {
      user.getUser().then((response) => {
        this.user = response.data.results[0];
      });
    }

    this.loadMeizi();
  }
}

DetailCtrl.$inject = ['$scope', 'TOPICS', '$filter', '$stateParams', 'user'];
