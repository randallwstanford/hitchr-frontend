import api from '../../serverUtils';

const LoginUser = (history, username, password) => api.auth.login(username, password)
  .then((result) => {
    if (result.status === 201) {
      history.push('/');
    }
    return {};
  })
  .catch((e) => {
    if (e.response.status === 401) {
      return { message: 'Wrong username or password' };
    }
    return { message: 'Something went wrong' };
  });

export default LoginUser;
