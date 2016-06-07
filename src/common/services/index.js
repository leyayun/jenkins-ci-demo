import user from './user';

export default angular.module('app.services', [])
  .service('User', user)
  .name;
