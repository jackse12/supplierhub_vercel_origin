import React from 'react';
import AppPage from '../../../@crema/hoc/AppPage';
import asyncComponent from '../../../@crema/utility/asyncComponent';

const Orders = asyncComponent(() =>
  import('../../../modules/Product-Mngt/orders'),
);
export default AppPage(() => <Orders />);
