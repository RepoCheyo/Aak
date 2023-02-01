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
    backgroundColor: '#f1f1f1',
    borderColor: 'red',
    borderStyle: 'solid',
    paddingRight: 12,
    paddingLeft: 12,
    borderRadius: 10,
    fontFamily: 'Inter-Regular',
  },
});
