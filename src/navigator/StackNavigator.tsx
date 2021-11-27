import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthParamList, MainParamList } from '@utils/type'

// Auth
import AuthScreen from '@screens/auth/AuthScreen'
import LoginScreen from '@screens/auth/LoginScreen'
import RegisterScreen from '@screens/auth/RegisterScreen'

// Main
import WaterScreen from '@screens/target/WaterScreen'
import CaloriesScreen from '@screens/target/CaloriesScreen'
import StepScreen from '@screens/target/StepScreen'
import WeightScreen from '@screens/target/WeightScreen'
import HomeScreen from '@screens/main/HomeScreen'

const { Screen: ScreenAuth, Navigator: NavigatorAuth } =
  createStackNavigator<AuthParamList>()
const { Screen: ScreenMain, Navigator: NavigatorMain } =
  createStackNavigator<MainParamList>()

export const AuthNavigatorScreen = () => {
  return (
    <NavigatorAuth headerMode="none">
      <ScreenAuth name="Auth" component={AuthScreen} />
      <ScreenAuth name="Login" component={LoginScreen} />
      <ScreenAuth name="Register" component={RegisterScreen} />
    </NavigatorAuth>
  )
}

export const MainNavigatorScreen = () => {
  return (
    <NavigatorMain headerMode="none">
      <ScreenMain name="Home" component={HomeScreen} />
      <ScreenMain name="Water" component={WaterScreen} />
      <ScreenMain name="Step" component={StepScreen} />
      <ScreenMain name="Calories" component={CaloriesScreen} />
      <ScreenMain name="Weight" component={WeightScreen} />
    </NavigatorMain>
  )
}
