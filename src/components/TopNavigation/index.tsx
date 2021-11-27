import React from 'react'
import {
  Icon,
  TopNavigation,
  TopNavigationAction,
  IconProps,
} from '@ui-kitten/components'
import { TypeTopNavigation } from '@utils/type'
import { Colors } from 'utils/color'

const TopNavigationButton = ({ navigation, title }: TypeTopNavigation) => {
  const BackIcon = (props: IconProps) => (
    <Icon
      {...props}
      animation="pulse"
      name="arrow-back"
      width={30}
      height={30}
      fill={Colors.purple500}
    />
  )

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
  )

  return <TopNavigation accessoryLeft={BackAction} title={title} />
}

export default TopNavigationButton
