import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <Text>{children}</Text >
  }

  return (
    <Text
        onPress={onClick}
    >
      {children}
    </Text>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link