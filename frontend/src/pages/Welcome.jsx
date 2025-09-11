import React from 'react';
import PrivateLayout from '../components/PrivateLayout';

const Welcome = () => {
  return (
    <PrivateLayout>
      <div style={{ maxWidth: 400, margin: '4rem auto', textAlign: 'center' }}>
        <h1>Welcome!</h1>
        <p>You have successfully logged in.</p>
      </div>
    </PrivateLayout>
  );
};

export default Welcome;
