import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {APP_ID, JAVASCRIPT_KEY, SERVER_URL} from '@env';

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(APP_ID, JAVASCRIPT_KEY);
Parse.serverURL = SERVER_URL;

const HomeScreen = () => {
  const GameScore = Parse.Object.extend('Config');
  const query = new Parse.Query(GameScore);
  query.get('zahPKGHc4M').then(
    gameScore => {
      // The object was retrieved successfully.
      console.log('jactivas ', gameScore.get('JActivas'));
    },
    error => {
      // The object was not retrieved successfully.
      // error is a Parse.Error with an error code and message.
    },
  );

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
