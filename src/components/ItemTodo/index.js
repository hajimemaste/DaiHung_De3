import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ItemTodo = props => {
  const {item, deleteItem, updateItem} = props;
  const navigation = useNavigation();

  const formatDate = () => {
    const dateObject = new Date(item?.createdAt);
    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1;
    const year = dateObject.getFullYear();
    return `${day < 10 ? `0${day}` : day}/${
      month < 10 ? `0${month}` : month
    }/${year}`;
  };

  const formatHour = () => {
    const dateObject = new Date(item?.createdAt);
    const hour = dateObject.getHours();
    const minute = dateObject.getMinutes();

    return `${hour}:${minute}`;
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={styles.textHeading}>{item?.topic}</Text>

        <Text style={styles.textSub}>{formatDate()}</Text>
      </View>
      {item.description != '' ? <Text style={styles.text}>{item?.description}</Text> : null}
      <View style={{flexDirection: 'row', justifyContent: 'flex-end', gap: 10}}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('UpdateTodoPage', {
              item: item,
              updateItem: updateItem,
            })
          }>
          <Icon name="edit" style={{...styles.icon, color: '#F9F400'}}></Icon>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => deleteItem(item?.id)}>
          <Icon
            name="trash-alt"
            style={{...styles.icon, color: '#E54646'}}></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    gap: 10,
  },

  stackIcon: {
    width: 8,
    height: 8,
    borderRadius: 9999,
  },

  textHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },

  textSub: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },

  text: {
    fontSize: 15,
    color: '#C2C2C2',
  },

  icon: {
    width: 30,
    height: 30,
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ItemTodo;
