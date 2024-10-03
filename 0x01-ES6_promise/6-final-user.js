import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((rlt) => (
      rlt.map((outp) => ({
        status: outp.status,
        value: outp.status === 'fulfilled' ? outp.value : String(outp.reason),
      }))
    ));
}
