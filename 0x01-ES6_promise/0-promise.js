export default function getResponseFromAPI(){
	return new Promise((resolve, reject) => {
		setTimeout(function(){
		resolve();
		}, 0);
	});
}
