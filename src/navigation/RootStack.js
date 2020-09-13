import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from 'src/screens/Home';

const Stack = createStackNavigator();

const RootStack = () => {
  const forFade = ({current}) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
        cardStyleInterpolator: forFade,
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{cardStyleInterpolator: forFade}}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
