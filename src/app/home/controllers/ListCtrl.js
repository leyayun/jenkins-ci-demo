export default class ListCtrl {
  constructor($scope, $state, TOPICS) {
    // "ngInject";

    this.TOPICS = TOPICS;

    $scope.goDetail = function(topic) {
      $state.go('detail', { id: topic.id });
    };
  }
}

ListCtrl.$inject = ['$scope', '$state', 'TOPICS'];
