import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import {View, StyleSheet, Text, Button} from 'react-native';
import {InputWithLabel} from '../../components';
import {useNavigation} from '@react-navigation/native';

const UpdateTodoPage = () => {
  const route = useRoute();
  const {item, updateItem} = route.params;
  const navigation = useNavigation();

  const [description, setDescription] = useState(item?.description);
  const [topic, setTopic] = useState(item?.topic);

  return (
    <View style={styles.container}>
      <View>
      <Text style={{...styles.textHeading, marginBottom: 10}}>
        Update Todo
      </Text>
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
        title="Save"
        onPress={() => {
          updateItem(item?.id, {
            createdAt: item?.createdAt,
            topic: topic,
            description: description,
          }).then(() => navigation.popToTop());
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

export default UpdateTodoPage;
