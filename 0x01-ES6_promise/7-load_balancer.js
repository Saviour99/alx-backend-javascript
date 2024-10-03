export default function loadBalancer(chinaDownload, USDownload) {
	return Promise.race([
		chinaDownload,
		USDownload,
	]).then((resp) => resp)
	.catch(new Error('No resolves')); 
}
