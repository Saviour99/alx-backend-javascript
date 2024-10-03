import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser() {
    const result = {
        photo: null,
        user: null,
    };

    try {
        if (uploadPhoto && createUser) {
            result.photo = await uploadPhoto();
            result.user = await createUser();
        }
    } catch (error) {
        console.error('Error during upload or user creation:', error);
    }

    return result;
}

