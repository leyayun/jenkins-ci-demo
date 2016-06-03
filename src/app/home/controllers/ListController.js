export default class ListController {
  constructor($scope, $state, TOPICS) {
  	// "ngInject";

    this.TOPICS = TOPICS;

    $scope.goDetail = function(topic){
      $state.go('detail', {id: topic.id});
    };
  }
}

ListController.$inject = ['$scope', '$state', 'TOPICS'];
