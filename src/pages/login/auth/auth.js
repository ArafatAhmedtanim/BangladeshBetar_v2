import axios from 'axios';
import API from './../../../dataProvider/api.json';

export default function Auth(values) {
  axios
    .post(API.HOST + API.LOGIN, {
      username: values.userName,
      password: values.password,
    })
    .then(res => {
      const user = {
        name: res.data.username,
        firstname: res.data.firstName,
        lastname: res.data.lastName,
        token: res.data.token,
      };
      localStorage.setItem('user', JSON.stringify({ user }));
      window.location.href = '/';
    })
    .catch(error => {
      console.log(error);
    });
}
