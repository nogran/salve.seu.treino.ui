import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import PremiumScreen from './src/screens/PremiumScreen';
import WorkoutScreen from './src/screens/WorkoutScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ExerciseScreen from './src/screens/ExerciseScreen';
import I18n from './src/util/i18n';

const WorkoutStack = createNativeStackNavigator();
function WorkoutStackScreen() {
  return (
    <WorkoutStack.Navigator>
      <WorkoutStack.Screen name="Workout" component={WorkoutScreen} options={{title: I18n.t('workout')}}/>
      <WorkoutStack.Screen name="Details" component={DetailsScreen} options={{title: I18n.t('details')}}/>
    </WorkoutStack.Navigator>
  );
}

const ExerciseStack = createNativeStackNavigator();
function ExerciseStackScreen() {
  return (
    <ExerciseStack.Navigator>
      <ExerciseStack.Screen name="Exercise" component={ExerciseScreen} options={{title: I18n.t('exercise')}}/>
      <ExerciseStack.Screen name="Details" component={DetailsScreen} options={{title: I18n.t('details')}}/>
    </ExerciseStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} options={{title: I18n.t('settings')}}/>
      <SettingsStack.Screen name="Details" component={DetailsScreen} options={{title: I18n.t('details')}}/>
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
        <Tab.Screen name="WorkoutStack" component={WorkoutStackScreen} options={{ title: I18n.t('workout'), tabBarIcon: ({ color }) => renderTabIcon('chalkboard-teacher', color) }} />
        <Tab.Screen name="ExerciseStack" component={ExerciseStackScreen} options={{ title: I18n.t('exercise'), tabBarIcon: ({ color }) => renderTabIcon('dumbbell', color) }} />
        <Tab.Screen name="PremiumStack" component={PremiumScreen} options={{ title: I18n.t('premium'), tabBarIcon: ({ color }) => renderTabIcon('star', color) }} />
        <Tab.Screen name="SettingsStack" component={SettingsStackScreen} options={{ title: I18n.t('settings'), tabBarIcon: ({ color }) => renderTabIcon('user-cog', color) }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
