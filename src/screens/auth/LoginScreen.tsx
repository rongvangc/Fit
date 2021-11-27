import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Button, Input } from '@ui-kitten/components'
import TopNavigationCmp from '@components/TopNavigation'
import LoginEvent from './hooks/LoginEvent'
import { TypeAuthProps } from '@utils/type'

const LoginScreen = ({ navigation }: TypeAuthProps) => {
  const navigateLogin = () => {
    navigation.navigate('Auth')
  }

  const {
    userInput,
    secureTextEntry,
    emailIcon,
    passwordIcon,
    secureIcon,
    onChangeUser,
    onChangePassword,
  } = LoginEvent()

  return (
    <Layout style={styles.Container}>
      <TopNavigationCmp navigation={navigation} />
      <Layout style={styles.Form}>
        <Input
          size="large"
          status="primary"
          placeholder="Username"
          value={userInput.email}
          accessoryLeft={emailIcon}
          onChangeText={onChangeUser}
          style={styles.Input}
          keyboardType="email-address"
        />
        <Input
          size="large"
          status="primary"
          placeholder="Password"
          value={userInput.password}
          accessoryLeft={passwordIcon}
          accessoryRight={secureIcon}
          onChangeText={onChangePassword}
          secureTextEntry={secureTextEntry}
          style={styles.Input}
        />
        <Button status="primary" style={styles.Button} onPress={navigateLogin}>
          Continue
        </Button>
      </Layout>
    </Layout>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  Form: {
    backgroundColor: 'transparent',
    padding: 20,
  },
  Button: {
    borderRadius: 15,
    marginVertical: 5,
  },
  Input: {
    borderRadius: 15,
    marginBottom: 5,
  },
})

export default LoginScreen
