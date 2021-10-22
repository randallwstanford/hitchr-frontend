import api from '../../serverUtils';

const LoginUser = (username, password) => {
  api.auth.login(username, password);
};

export default LoginUser;
