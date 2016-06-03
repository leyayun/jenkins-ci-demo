export default ($interval) => {
	"ngInject";
	return {
    restrict: 'E',
    template: '<b>{{time | date: "yyyy-MM-dd HH:mm:ss"}}</b>',
    link: (scope, element) => {
    	$interval(() => {
    		scope.time = new Date();
    	}, 1000);
    }
	}
}