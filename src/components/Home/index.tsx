import React from 'react';

interface IHome {
  dispatchLogout: () => void;
}

const Home: React.FunctionComponent<IHome> = ({
  dispatchLogout = () => {
    return;
  },
}) => {
  const onClick = () => {
    dispatchLogout();
  };

  return <h1 onClick={onClick}>Logout</h1>;
};

export default Home;
