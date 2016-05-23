export default class User {
  constructor($http) {
    this.getUser = () => {
      return $http.get('https://randomuser.me/api/', {
        params: {
          gender: 'female'
        }
      });
    }
  }
}

User.$inject = ['$http'];
