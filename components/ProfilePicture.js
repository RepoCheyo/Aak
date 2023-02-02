import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {windowHeight} from '../utils/Dimentions';

export default function ProfilePicture({...rest}) {
  return (
    <View style={styles.profilePictureContainer}>
      <Image style={styles.profilePicture} {...rest} />
      <TouchableOpacity>
        <Text style={styles.selectPhoto}>Seleccionar foto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  profilePictureContainer: {
    alignItems: 'center',
    padding: 10,
  },
  profilePicture: {
    height: 120,
    width: 120,
    borderRadius: 100,
  },
  selectPhoto: {
    fontFamily: 'Inter-Bold',
    color: '#0099FB',
    marginTop: 5,
  },
});
