/* @flow */

import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  rowStyle: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 3,
    marginTop: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});


const Row = (props) => (
  <TouchableOpacity style={styles.rowStyle} onPress={() => props.onRemove(props.item)}>
    <Text>{props.item}</Text>
  </TouchableOpacity>
);

Row.propTypes = {
  onRemove: PropTypes.func,
  item: PropTypes.string,
};

export default Row;
