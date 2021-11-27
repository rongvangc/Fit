import React, { useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { Icon, IconProps } from '@ui-kitten/components'

type TypeUser = {
  name: string
  email: string
  phone: string
  password: string
}

const RegisterEvent = () => {
  const [userInput, setUserInput] = useState<TypeUser>({
    name: '',
    email: '',
    phone: '',
    password: '',
  })

  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true)

  const userIcon = (props: IconProps) => (
    <Icon {...props} name="person-outline" />
  )
  const passwordIcon = (props: IconProps) => (
    <Icon {...props} name="unlock-outline" />
  )
  const phoneIcon = (props: IconProps) => (
    <Icon {...props} name="phone-outline" />
  )
  const emailIcon = (props: IconProps) => (
    <Icon {...props} name="email-outline" />
  )
  const secureIcon = (props: IconProps) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  )

  const onChangeInput = (name: string, value: string) => {
    setUserInput({ ...userInput, [name]: value })
  }

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry)
  }

  return {
    userInput,
    secureTextEntry,
    userIcon,
    passwordIcon,
    phoneIcon,
    emailIcon,
    secureIcon,
    onChangeInput,
  }
}

export default RegisterEvent
