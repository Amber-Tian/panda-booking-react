import Layout from 'components/Layout'
import React from 'react';
import Logo from '../components/Logo'
import {NavLink} from 'react-router-dom';

function Labels() {
  return (
    <Layout>
      <Logo />
      <div className="tags">
        {/*<NavLink></NavLink>*/}
      </div>
    </Layout>
  );
}

export default Labels