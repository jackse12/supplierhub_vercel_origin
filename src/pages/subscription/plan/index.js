import React from 'react';
import AppPage from '../../../@crema/hoc/AppPage';
import asyncComponent from '../../../@crema/utility/asyncComponent';

const Store = asyncComponent(() => import('../../../modules/Subscription'))
export default AppPage(() => <Store />);
