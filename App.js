import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ActionButtonMultiple from '../AwesomeProject/src/ActionButtonMultiple'
import TaskList from './src/TaskList';
import AddTask from './src/AddTask';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ActionButtonMultiple></ActionButtonMultiple>
    // <NavigationContainer>
    //   <Stack.Navigator
    //     screenOptions={{
    //       headerShown: false,
    //     }}
    //   >
    //     <Stack.Screen
    //       name="TaskList"
    //       component={TaskList}
    //       options={{
    //         headerShown: true,
    //         headerStyle: {
    //           backgroundColor: '#2196F3',
    //         },
    //         headerTintColor: '#FFF',
    //         headerTitleStyle: {
    //           fontSize: 20,
    //           fontWeight: 'bold',
    //         },
    //         title: 'Task List',
    //       }}
    //     />
    //     <Stack.Screen
    //       name="AddTask"
    //       component={AddTask}
    //       options={{
    //         headerShown: true,
    //         headerStyle: {
    //           backgroundColor: '#2196F3',
    //         },
    //         headerTintColor: '#FFF',
    //         headerTitleStyle: {
    //           fontSize: 20,
    //           fontWeight: 'bold',
    //         },
    //         title: 'Add Task',
    //       }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;
