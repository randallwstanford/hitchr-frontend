// React
import React from 'react';

// Stylesheet
import './User.css';
import PayMethod from '../../components/PayMethod/PayMethod';

import payMethod from '../../dummyData/payMethod';

const User = () => (
  <div>
    <span>Username</span>
    <PayMethod method={payMethod} />
    { /* TODO: Messages Sub-Component */}
    { /* TODO: Rating Sub-Component (WishList) */}
  </div>
);
export default User;
