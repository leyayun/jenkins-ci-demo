import currentTime from './currentTime';

export default angular.module('app.directives', [])
	.directive('currentTime', currentTime)
	.name;