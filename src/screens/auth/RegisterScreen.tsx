import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Button, Input } from '@ui-kitten/components'
import { TypeAuthProps } from '@utils/type'
import TopNavigationCmp from '@components/TopNavigation'
import RegisterEvent from './hooks/RegisterEvent'

const RegisterScreen = ({ navigation }: TypeAuthProps) => {
  const navigateLogin = () => {
    navigation.navigate('Auth')
  }

  const {
    userInput,
    secureTextEntry,
    userIcon,
    passwordIcon,
    secureIcon,
    phoneIcon,
    emailIcon,
    onChangeInput,
  } = RegisterEvent()

  return (
    <Layout style={styles.Container}>
      <TopNavigationCmp navigation={navigation} />
      <Layout style={styles.Form}>
        <Input
          size="large"
          status="primary"
          placeholder="Fullname"
          value={userInput.name}
          accessoryLeft={userIcon}
          onChangeText={(value) => onChangeInput('name', value)}
          style={styles.Input}
        />
        <Input
          size="large"
          status="primary"
          placeholder="Email address"
          value={userInput.email}
          accessoryLeft={emailIcon}
          onChangeText={(value) => onChangeInput('email', value)}
          style={styles.Input}
          keyboardType="email-address"
        />
        <Input
          size="large"
          status="primary"
          placeholder="Phone number"
          accessoryLeft={phoneIcon}
          value={userInput.phone}
          onChangeText={(value) => onChangeInput('phone', value)}
          style={styles.Input}
          keyboardType="phone-pad"
        />
        <Input
          size="large"
          status="primary"
          placeholder="Password"
          accessoryLeft={passwordIcon}
          accessoryRight={secureIcon}
          value={userInput.password}
          secureTextEntry={secureTextEntry}
          onChangeText={(value) => onChangeInput('password', value)}
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

export default RegisterScreen
