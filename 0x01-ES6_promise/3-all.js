import { uploadPhoto, createUser } from './utils.js'

export default function handleProfileSignup() {
	return Promise.all([
		uploadPhoto(),
		createUser(),
	]).then((message)=>{
		let [photoRes, userRes] = message;
		console.log(`${photoRes.body} ${userRes.firstName} ${userRes.lastName}`);
	}).catch(()=>{
		console.error("Signup system offline");
	});
}
