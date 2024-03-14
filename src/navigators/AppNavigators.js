import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CreateTodoPage, HomePage, UpdateTodoPage} from './../pages';
import {HeaderComponent} from '../components';

const Stack = createNativeStackNavigator();

const AppNavigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{
            animationEnabled: false,
            header: () => null,
          }}
        />
        <Stack.Screen
          name="CreateTodoPage"
          component={CreateTodoPage}
          options={{
            animationEnabled: true,
            header: () => <HeaderComponent isSearch={false} />,
          }}
        />
        <Stack.Screen
          name="UpdateTodoPage"
          component={UpdateTodoPage}
          options={{
            header: () => <HeaderComponent isSearch={false} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigators;
