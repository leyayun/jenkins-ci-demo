import user from './user';

export default angular.module('app.services', [])
	.service('user', user)
	.name;