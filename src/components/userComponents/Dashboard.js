import React from 'react';
import firebase from '../../firebase';
import {useSelector} from 'react-redux';

const Dashboard = () => {
  const name = useSelector(state => state.user.name);


  return(
    <div>
      <h1 style={{textAlign:'center'}}>
        {name}
      </h1>
    </div>
  );
};

export default Dashboard;