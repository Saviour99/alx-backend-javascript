export default function getFullResponseFromAPI(success) {
    const response = success 
        ? Promise.resolve({ status: 200, body: 'Success' }) 
        : Promise.reject(new Error('The fake API is not working currently'));
    return response;
}
