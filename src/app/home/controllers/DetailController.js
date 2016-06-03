export default class DetailController {
  constructor($scope, TOPICS, $filter, $stateParams, user) {
  	// "ngInject";

  	$scope.topic = $filter('find')(TOPICS, Number($stateParams.id));

  	this.loadMeizi = function(){
	  	user.getUser().then((response) => {
	  		this.user = response.data.results[0];
	  	});
  	}

  	this.loadMeizi();
  }
}

DetailController.$inject = ['$scope', 'TOPICS', '$filter', '$stateParams', 'user'];

