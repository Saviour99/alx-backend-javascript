/**
 * Create a function named getListStudents that returns an array of objects.
 */

export default function getListStudents() {
	let arrayObjs = new Array();
	arrayObjs.push({id: 1, firstName: "Guillaume", location: "San Francisco"});
	arrayObjs.push({id: 2, firstName: "James", location: "Columbia"});
	arrayObjs.push({id: 5, firstName: "Serena", location: "San Francisco"});
	return arrayObjs;
}
