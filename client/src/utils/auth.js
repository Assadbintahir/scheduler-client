import Cookies from 'js-cookie';

export const loginUser = (userDetails) => {
  Cookies.set('email', userDetails.email);
  Cookies.set('token', userDetails.token);
  window.location.reload();
};

export const logoutUser = () => {
  Cookies.remove('email');
  Cookies.remove('token');
  window.location.reload();
};

export const userLoggedIn = () => {
  if (Cookies.get('token')) {
    return true;
  }
  return false;
};
