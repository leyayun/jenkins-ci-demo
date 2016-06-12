export default class DetailCtrl {
  constructor($scope, TOPICS, $filter, $stateParams, User) {
    "ngInject";

    $scope.topic = $filter('find')(TOPICS, Number($stateParams.id));

    this.loadMeizi = function() {
      User.getUser().then((response) => {
        this.user = response.data.results[0];
      });
    }

    this.loadMeizi();
  }
}