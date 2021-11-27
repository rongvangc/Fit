import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Layout, Button } from '@ui-kitten/components'
import { AuthScreenNavigationProp } from '@utils/type'

const LoginBg = require('../../assets/images/login-bg.png')

const AuthScreen = ({ navigation }: AuthScreenNavigationProp) => {
  const navigateLogin = () => {
    navigation.navigate('Login')
  }

  const navigateRegister = () => {
    navigation.navigate('Register')
  }

  return (
    <Layout style={styles.Container}>
      <Image
        source={LoginBg}
        style={styles.Image}
        resizeMode="cover"
        fadeDuration={500}
      />
      <Layout style={styles.Form}>
        <Button status="primary" style={styles.Button} onPress={navigateLogin}>
          Login
        </Button>
        <Button
          appearance="outline"
          style={styles.Button}
          onPress={navigateRegister}
        >
          Register
        </Button>
      </Layout>
    </Layout>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  Image: {
    width: 350,
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Form: {
    backgroundColor: 'transparent',
    padding: 20,
  },
  Button: {
    borderRadius: 15,
    marginVertical: 5,
  },
})

export default AuthScreen
