import topics from "./topics"

export default angular.module('app.constants', [])
	.constant('TOPICS', topics)
	.name;