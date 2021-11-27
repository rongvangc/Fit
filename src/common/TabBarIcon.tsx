import React from 'react'
import Icon from 'react-native-vector-icons/Feather'

import { TypeTabBarIcon } from '@utils/type'

const TabBarIcon = ({
  color = '#484848',
  size = 24,
  name = Prop,
}: TypeTabBarIcon) => <Icon name={name} size={size} color={color} />

export default TabBarIcon
