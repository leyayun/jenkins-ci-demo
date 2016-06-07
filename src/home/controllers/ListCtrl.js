export default class ListCtrl {
  constructor($scope, $state, TOPICS) {
    "ngInject";

    this.TOPICS = TOPICS;

    $scope.goDetail = function(topic) {
      $state.go('dashboards.detail', { id: topic.id });
    };
  }
}