import { useAuth0 } from '@auth0/auth0-react';
import {
  postUser,
} from '../API/API';
import LoginButton from './buttons/LogIn';
import LogoutButton from './buttons/LogOut';
// import { userData } from '../staticData';



const AuthenticationButton = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0<any>();

  if (isAuthenticated) {
    // const userInfo = userData(user);
    const userData = {
      sub: user.sub,
      email: user.email,
      name: user.name,
      given_name: user.given_name,
      family_name: user.family_name,
      picture: user.picture,
    };
    // console.log(user);
    getAccessTokenSilently()
      .then((accessToken) => {
        postUser(userData, accessToken);
      });
  }
console.log(user);
  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;
