import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ExerciseScreen from './src/screens/ExerciseScreen';

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const ExerciseStack = createNativeStackNavigator();
function ExerciseStackScreen() {
  return (
    <ExerciseStack.Navigator>
      <ExerciseStack.Screen name="Exercise" component={ExerciseScreen} />
      <ExerciseStack.Screen name="Details" component={DetailsScreen} />
    </ExerciseStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const renderTabIcon = (name: string, color: string) => {
  return <Icon name={name} color={color} size={25} />
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="WorkoutStack" component={HomeStackScreen} options={{ title: 'Treino', tabBarIcon: ({ color }) => renderTabIcon('chalkboard-teacher', color) }} />
        <Tab.Screen name="ExerciseStack" component={ExerciseStackScreen} options={{ title: 'Exercícios', tabBarIcon: ({ color }) => renderTabIcon('dumbbell', color) }} />
        <Tab.Screen name="SettingsStack" component={SettingsStackScreen} options={{ title: 'Configurações', tabBarIcon: ({ color }) => renderTabIcon('user-cog', color) }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
