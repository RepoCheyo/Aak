import {
  View,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React from 'react';

const CustomInput = ({flex, width, ...rest}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.inputContainer}>
        <TextInput
          {...rest}
          style={[styles.input, {width: width}, {flex: flex}]}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {alignItems: 'center'},
  input: {
    backgroundColor: '#d9d9d9',
    paddingRight: 12,
    paddingLeft: 12,
    borderRadius: 10,
  },
});
