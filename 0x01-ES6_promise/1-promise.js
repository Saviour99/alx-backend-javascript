export default function getFullResponseFromAPI(success) {
  return new Promise((fulfill, deny) => {
    if (success) {
      fulfill({
        status: 200,
        body: 'Success',
      });
    } else {
      deny(new Error('The fake API is not working currently'));
    }
  });
}

