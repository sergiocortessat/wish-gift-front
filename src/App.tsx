import React from 'react';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import Auth0Screen from './auth0/Auth0'
import Loading from './auth0/Loading';

function App() {
  const {
    isAuthenticated, isLoading,
  } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      {isAuthenticated ? (
      <div>
        hello
        <Auth0Screen />
      </div>):(
        <Auth0Screen />
      )}
    </>
  )
}

  export default App;
