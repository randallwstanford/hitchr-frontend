import api from '../../serverUtils';

const LoginUser = (username, password) => {
  api.auth.login(username, password)
    .then(console.log);
};

export default LoginUser;
