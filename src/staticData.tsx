/* eslint-disable import/prefer-default-export */
export const userData = (user:{sub:string, email:string, name:string, given_name:string, family_name:string, picture:string}) => ({
  sub: user.sub,
  email: user.email,
  name: user.name,
  given_name: user.given_name,
  family_name: user.family_name,
  picture: user.picture,
});
