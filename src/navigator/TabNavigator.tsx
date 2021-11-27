import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { TabParamList } from '@utils/type'

import ListScreen from '@screens/main/ListScreen'
import ExerciseScreen from '@screens/main/ExerciseScreen'
import CalendarScreen from '@screens/main/CalendarScreen'
import { MainNavigatorScreen } from '@navigator/StackNavigator'

import Icon from 'react-native-vector-icons/Feather'

import { Colors } from '@utils/color'

const { Navigator, Screen } = createMaterialBottomTabNavigator<TabParamList>()

export const TabNavigator = () => {
  return (
    <Navigator
      activeColor={Colors.purple600}
      inactiveColor="#dedede"
      keyboardHidesNavigationBar={true}
      shifting={false}
      initialRouteName="Home"
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: Colors.white,
      }}>
      <Screen
        name="Home"
        component={MainNavigatorScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Icon
              style={{ paddingTop: 5 }}
              name="home"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Screen
        name="Exercise"
        component={ExerciseScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Icon
              style={{ paddingTop: 5 }}
              name="activity"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Screen
        name="List"
        component={ListScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Icon
              style={{ paddingTop: 5 }}
              name="list"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Icon
              style={{ paddingTop: 5 }}
              name="calendar"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Navigator>
  )
}
