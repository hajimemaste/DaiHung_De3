import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

const InputWithLabel = ({label, value, onChangeText, isDes}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={{...styles.input, height: isDes ? 150 : 50}}
        value={value}
        onChangeText={onChangeText}
        multiline={isDes} 
        numberOfLines={isDes ? 4  : 1}
        textAlignVertical= {isDes ? 'top' : 'center'} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 10,
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },

  input: {
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 15,
  },
});

export default InputWithLabel;
