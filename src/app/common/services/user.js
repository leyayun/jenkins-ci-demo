export default class User {
	constructor($http) {
		"ngInject";

		this.getUser = () => {
			return $http.get('https://randomuser.me/api/', {
				params: {
					gender: 'female'
				}
			});
		}
	}
}