import {
  NavigatorScreenParams,
  CompositeNavigationProp,
} from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { MaterialBottomTabScreenProps } from '@react-navigation/material-bottom-tabs'

import { Colors } from '@utils/color'

/**
 * * Auth Navigation
 */
export type AuthParamList = {
  Auth: undefined
  Login: undefined
  Register: undefined
}
export type AuthScreenNavigationProp = StackScreenProps<AuthParamList, 'Auth'>

/**
 * * Main Navigation
 */
export type MainParamList = {
  Home: NavigatorScreenParams<TabParamList>
  Water: undefined
  Calories: undefined
  Step: undefined
  Weight: undefined
}
export type MainScreenNavigationProp = StackScreenProps<MainParamList, 'Water'>

/**
 * * Drawer Menu
 */
export type DrawerParamList = {
  Account: NavigatorScreenParams<TabParamList>
}
export type DrawerScreenNavigationProp = DrawerScreenProps<
  DrawerParamList,
  'Account'
>

/**
 * * Tab Navigation
 */
export type TabParamList = {
  Home: undefined
  List: undefined
  Exercise: undefined
  Calendar: undefined
}
export type TabScreenNavigationProp = MaterialBottomTabScreenProps<
  TabParamList,
  'Home'
>

/**
 * * Top Navigation
 */
export type TypeTopNavigation = {
  title?: string
  navigation: any
}

/**
 * * Colors
 */
export type TypeTabBarIcon = {
  name?: any
  size?: number
  color?: Colors
}

/**
 * * Workout Card
 */
export type TypeWorkout = {
  id: string
  title: string
  duration: number
  level: string
}

export type TypeWorkoutItem = {
  item: TypeWorkout
}

export type TypeWorkoutData = {
  data: TypeWorkout[]
}

/**
 * * Nested Navigation
 */
export type NestedDrawer = CompositeNavigationProp<
  DrawerScreenNavigationProp,
  MainScreenNavigationProp
>
