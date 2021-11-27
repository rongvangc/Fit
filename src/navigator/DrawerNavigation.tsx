import React from 'react'
import { DrawerParamList } from '@utils/type'
import { createDrawerNavigator } from '@react-navigation/drawer'

import DrawerContent from '@navigator/DrawerContent'
import { TabNavigator } from '@navigator/TabNavigator'

const DrawerNavigation = () => {
  const { Screen, Navigator } = createDrawerNavigator<DrawerParamList>()

  return (
    <Navigator
      initialRouteName="Account"
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Screen name="Account" component={TabNavigator} />
    </Navigator>
  )
}

export default DrawerNavigation
