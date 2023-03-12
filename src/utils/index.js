import axios from 'axios';

export const getUsersFromServer = async () => {

  const URL_1 = 'https://213.184.245.66:5010';
  const URL_2 = 'https://10.3.1.184:5010/api/get_all_people';
  const URL_3 = 'https://10.3.1.69:5010/api/get_all_people';

  const USERNAME = 'fetest';
  const PASSWORD = 'root123456';

  try {
    const response = await axios.get(URL_1, {
      auth: {
        username: USERNAME,
        password: PASSWORD
      }
    });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};