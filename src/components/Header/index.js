import React, {useState, useEffect} from 'react';
import {Image_App} from '../../assets';
import {LinearGradient} from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const HeaderComponent = props => {
  const {valueCallBack, isSearch} = props;

  const [value, setValue] = useState('');

  return (
    <LinearGradient
      colors={['#4c669f', '#6EC3C9', '#CAE5E8']}
      style={{...styles.container, height: isSearch ? 140 : 80}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', gap: 10}}>
          <Image source={Image_App.avatar} style={styles.avatar} />
          <View>
            <Text style={{...styles.text, fontSize: 16}}>Wellcome to</Text>
            <Text style={{...styles.text, fontWeight: 'bold'}}>
              Đoàn Đại Hưng
            </Text>
          </View>
        </View>
        <Icon.Button
          name="menu"
          color={'#fff'}
          backgroundColor={'transparent'}
          size={24}
          underlayColor="rgba(0, 0, 0, 0.1)"
          style={styles.btn}
          onPress={() => {
            alert('Bấm vào làm gì?');
          }}></Icon.Button>
      </View>
      {isSearch ? (
        <View style={styles.search}>
          <Icon name="search" style={styles.icon}></Icon>
          <TextInput
            style={{flex: 1}}
            placeholder="Nhập vào đây để tìm kiếm"
            onChangeText={value => {
              valueCallBack(value), setValue(value);
            }}
            value={value}
          />
          {value == '' ? null : (
            <TouchableOpacity
              onPress={() => {
                setValue(''), valueCallBack('');
              }}>
              <Icon name="close" style={styles.icon}></Icon>
            </TouchableOpacity>
          )}
        </View>
      ) : null}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00F5FF',
    padding: 10,
    elevation: 10,
    gap: 20,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },

  textHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },

  text: {
    fontSize: 18,
    color: '#fff',
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 9999,
  },

  btn: {
    paddingLeft: 17,
  },

  icon: {
    width: 30,
    height: 30,
    fontSize: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  search: {
    paddingVertical: 0,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 999,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default HeaderComponent;
