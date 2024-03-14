import React, {useEffect, useState, useRoute} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {HeaderComponent, ItemTodo} from '../../components';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';

const HomePage = () => {
  const [valueSearch, setValueSearch] = useState('');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const renderItem = ({item}) => (
    <ItemTodo
      item={item}
      deleteItem={deleteAPIdata}
      updateItem={updateAPIdata}
    />
  );

  const filteredData = data.filter(item => {
    return item.topic.toString().includes(valueSearch);
  });

  const url = 'https://65f29f86034bdbecc7655c62.mockapi.io/todoList';

  const getAPIdata = async url => {
    setIsLoading(true);
    try {
      let response = await fetch(url);
      if (response.ok) {
        let result = await response.json();
        setData(result);
      } else {
        console.log('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error:', error);
      console.log('Failed to fetch data');
    } finally {
      setIsLoading(false);
    }
  };

  const deleteAPIdata = async id => {
    setIsLoading(true);
    const deleteUrl = `${url}/${id}`;
    try {
      const response = await fetch(deleteUrl, {method: 'DELETE'});
      if (response.ok) {
        console.log('Delete successful');
        // Sau khi xóa thành công, cập nhật lại dữ liệu
        getAPIdata(url);
      } else {
        console.log('Delete failed');
      }
    } catch (error) {
      console.error('Error:', error);
      console.log('Delete failed');
    } finally {
      setIsLoading(false);
    }
  };

  const updateAPIdata = async (id, newData) => {
    setIsLoading(true);
    const updateUrl = `${url}/${id}`;
    try {
      const response = await fetch(updateUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });
      if (response.ok) {
        console.log('Update successful');

        getAPIdata(url);
      } else {
        console.log('Update failed');
      }
    } catch (error) {
      console.error('Error:', error);
      console.log('Update failedaa');
    } finally {
      setIsLoading(false);
    }
  };

  const addAPIdata = async newData => {
    setIsLoading(true);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });
      if (response.ok) {
        console.log('Add successful');
        // Sau khi thêm thành công, cập nhật lại dữ liệu
        getAPIdata(url);
      } else {
        console.log('Add failed');
      }
    } catch (error) {
      console.error('Error:', error);
      console.log('Add failed');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAPIdata(url);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'flex-start'}}>
      <HeaderComponent valueCallBack={setValueSearch} isSearch={true} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 15,
          padding: 15,
        }}>
        <Text style={{color: 'black', fontSize: 28, fontWeight: 'bold'}}>
          Todo List
        </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('CreateTodoPage', {addItem: addAPIdata})
          }>
          <Icon
            name="plus-circle"
            style={{
              fontSize: 24,
              alignItems: 'center',
              justifyContent: 'center',
              color: '#205AA7',
            }}></Icon>
        </TouchableOpacity>
      </View>
      <View style={{gap: 10, paddingHorizontal: 10}}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            data={filteredData.reverse()}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </View>
  );
};

export default HomePage;
