import api from '../../serverUtils';

const RegisterUser = (history, username, password, isDriver, paymentMethods) => {
  api.auth.register(username, password, isDriver, paymentMethods)
    .then((response) => {
      if (response.status === 201) {
        history.push('/');
      }
    });
};

export default RegisterUser;
