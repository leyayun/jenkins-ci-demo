import find from './find';

export default angular.module('app.filters', [])
	.filter('find', find)
	.name;