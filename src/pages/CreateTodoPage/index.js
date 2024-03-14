import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import {View, StyleSheet, Text, Button} from 'react-native';
import {InputWithLabel} from '../../components';
import {useNavigation} from '@react-navigation/native';

const CreateTodoPage = () => {
  const route = useRoute();
  const {addItem} = route.params;
  const navigation = useNavigation();

  const [idTodo, setIdTodo] = useState('');
  const [description, setDescription] = useState('');
  const [topic, setTopic] = useState('');

  return (
    <View style={styles.container}>
      <View>
      <Text style={{...styles.textHeading, marginBottom: 10}}>Add Todo</Text>
      <InputWithLabel
        label={'Topic'}
        value={topic}
        onChangeText={setTopic}
        isDes={false}
      />
      <InputWithLabel
        label={'Description'}
        value={description}
        onChangeText={setDescription}
        isDes={true}
      />
      </View>
      <Button
        title="Send"
        onPress={() => {
          addItem({
            createdAt: '2024-03-14T12:24:30.502Z',
            topic: topic,
            description: description,
          }).then(() => navigation.navigate('HomePage'));
        }}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 10,
    flexDirection: 'column',
    gap: 15,
    flex: 1,
    justifyContent: 'space-between'
  },

  textHeading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
  },

  textSub: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
});

export default CreateTodoPage;
