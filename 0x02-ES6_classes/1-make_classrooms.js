import ClassRoom from ./0-classroom;

export default function initializeRoom() {
	let classRoomObjects = [
		ClassRoom(`_maxStudentsSize: 19`);
		ClassRoom(`_maxStudentsSize: 20`);
		ClassRoom(`_maxStudentsSize: 34`);
	];
	return classRoomObjects;
}
