export default class HolbertonCourse  {
	constructor(name, length, students){
		this._name = name;
		this._length = length;
		this._students = students;
	}

	get name(){
		return this._name;
	}

	get length(){
                return this._length;
        }

	get students(){
                return this._students;
        }


	set newName(newN){
		return this.new;
	}

	set newLength(newLen){
                return this.new;
        }

	set newStudents(newStds) {
                return this.new;
        }
}
