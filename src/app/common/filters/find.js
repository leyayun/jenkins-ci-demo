export default () => {
	return (collection, id) => {
		return collection.filter((obj) => {
			return obj.id === id;
		})[0];	
	}
}