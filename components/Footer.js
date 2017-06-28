import React from 'react';
import FilterLink from '../containers/FilterLink'
import { Text } from 'react-native'

const Footer = () => (
  <Text>
    Show:
    {' '}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_INSPRINT">
      In Sprint
    </FilterLink>
  </Text>
)

var def = {
    active: true,
    children: "child",
    onClick: function() {
        return null;
    }
}

export default Footer