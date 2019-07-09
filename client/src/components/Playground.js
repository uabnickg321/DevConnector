import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Playground = props => {
  return (
    <div>
      <Link to='/'>
        <button>Home</button>
      </Link>
    </div>
  );
};

Playground.propTypes = {};

export default Playground;
