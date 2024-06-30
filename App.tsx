import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import PremiumScreen from './src/screens/PremiumScreen';
import WorkoutScreen from './src/screens/WorkoutScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import HelpScreen from './src/screens/HelpScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ExerciseScreen from './src/screens/ExerciseScreen';
import I18n from './src/util/i18n';
import GlobalStyles from './src/styles/GlobalStyles';

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

const HelpStack = createNativeStackNavigator();
function HelpStackScreen() {
  return (
    <HelpStack.Navigator>
      <HelpStack.Screen name="Help" component={HelpScreen} options={{title: I18n.t('help')}}/>
      <HelpStack.Screen name="Details" component={DetailsScreen} options={{title: I18n.t('details')}}/>
    </HelpStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const renderTabIcon = (name: string, color: string) => {
  return <Icon name={name} color={color} size={25} />
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: GlobalStyles.colorPrimaryDark.color, tabBarInactiveTintColor: GlobalStyles.colorActive.color, }}>
        <Tab.Screen name="WorkoutStack" component={WorkoutStackScreen} options={{ title: I18n.t('workout'), tabBarIcon: ({ color }) => renderTabIcon('chalkboard-teacher', color) }} />
        <Tab.Screen name="ExerciseStack" component={ExerciseStackScreen} options={{ title: I18n.t('exercise'), tabBarIcon: ({ color }) => renderTabIcon('dumbbell', color) }} />
        <Tab.Screen name="PremiumStack" component={PremiumScreen} options={{ title: I18n.t('premium'), tabBarIcon: ({ color }) => renderTabIcon('star', color) }} />
        <Tab.Screen name="HelpStack" component={HelpStackScreen} options={{ title: I18n.t('help'), tabBarIcon: ({ color }) => renderTabIcon('question', color) }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
