import axios from 'axios';
import API from './../../../dataProvider/api.json';

export default function Auth(values) {
  axios
    .post(API.HOST + API.LOGIN, {
      email: values.email,
      password: values.password,
    })
    .then(res => {
      const user = {
        username: res.data.username,
        email: res.data.email,
        role: res.data.role,
        token: res.data.token,
      };
      localStorage.setItem('user', JSON.stringify({ user }));
      window.location.href = '/users';
    })
    .catch(error => {
      console.log(error);
    });
}
