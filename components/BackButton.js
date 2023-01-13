import {TouchableOpacity, StyleSheet} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import React from 'react';

const BackButton = ({...rest}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Octicons name="arrow-left" size={20} color="#000" />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#d9d9d9',
    padding: 8,
    paddingRight: 12,
    paddingLeft: 12,
    borderRadius: 300,
  },
});
