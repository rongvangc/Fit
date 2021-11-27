import React, { useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { Icon, IconProps } from '@ui-kitten/components'

type TypeUser = {
  email: string
  password: string
}

const LoginEvent = () => {
  const [userInput, setUserInput] = useState<TypeUser>({
    email: 'shyn',
    password: '865779',
  })

  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true)

  const emailIcon = (props: IconProps) => (
    <Icon {...props} name="email-outline" />
  )
  const passwordIcon = (props: IconProps) => (
    <Icon {...props} name="unlock-outline" />
  )
  const secureIcon = (props: IconProps) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  )

  const onChangeUser = (value: string) => {
    setUserInput({ ...userInput, email: value })
  }

  const onChangePassword = (value: string) => {
    setUserInput({ ...userInput, password: value })
  }

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry)
  }

  return {
    userInput,
    secureTextEntry,
    onChangeUser,
    onChangePassword,
    emailIcon,
    passwordIcon,
    secureIcon,
  }
}

export default LoginEvent
