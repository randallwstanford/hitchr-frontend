import api from '../../serverUtils';

const RegisterUser = (history, username, password, isDriver, paymentMethods) => {
  api.auth.register(username, password, isDriver, paymentMethods)
    .then((x) => {
      console.log(x.data);
      return x;
    })
    .then((response) => {
      if (response.status === 201) {
        history.push('/');
      }
    });
};

export default RegisterUser;
