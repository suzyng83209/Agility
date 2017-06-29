import React from 'react';
import FilterLink from '../containers/FilterLink'
import { View, Text,StyleSheet } from 'react-native'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED, SHOW_INSPRINT } from '../actions/types'

const Footer = () => (
  <View style={styles.container}>
    <FilterLink filter={SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={SHOW_COMPLETED}>
      Completed
    </FilterLink>
    <FilterLink filter={SHOW_INSPRINT}>
      In Sprint
    </FilterLink>
  </View>
)

var def = {
    active: true,
    children: "child",
    onClick: function() {
        return null;
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 16,
    alignItems: "flex-end",
    justifyContent: "space-between"
  }
})

export default Footer