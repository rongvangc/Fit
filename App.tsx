import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { enableScreens } from 'react-native-screens'

import rootReducer from './src/store/reducer'
import 'react-native-reanimated'
import MainNavigator from './src/navigator'
import { default as theme } from './theme.json'

export default function App() {
  enableScreens()
  // const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

  return (
    // <Provider store={store}>
    <>
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <MainNavigator />
      </ApplicationProvider>
    </>
    // </Provider>
  )
}
