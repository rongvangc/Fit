import React, { useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'

import { AuthNavigatorScreen } from '@navigator/StackNavigator'
import DrawerNavigation from '@navigator/DrawerNavigation'

const MainNavigator = () => {
  const [login, setLogin] = useState<boolean>(true)

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          {!login ? <AuthNavigatorScreen /> : <DrawerNavigation />}
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}

export default MainNavigator
