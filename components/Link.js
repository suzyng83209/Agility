import React from 'react';
import PropTypes from 'prop-types';
import { Text, Button } from 'react-native';

const Link = ({ active, children, onClick }) => {
  return (
    <Button
      disabled={active}
      onPress={onClick}
      title={children}
      color="#841584"
    />
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link