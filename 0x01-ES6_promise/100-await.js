import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser(){
	if(uploadPhoto && createUser){
		return {
			photo: await uploadPhoto(),
			user: await createUser(),
		};
	} else {
		return {
			photo: null,
			user: null,
		};
	}
}
