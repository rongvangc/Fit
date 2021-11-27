import React from 'react'
import { StyleSheet, View, ViewStyle, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import { Colors, TextColor } from 'utils/color'

type Props = {
  size?: number
  color?: TextColor
  icon?: string
  backgroundColor?: Colors
  customStyle?: ViewStyle
  disable?: boolean
  onPress?(): void
}

const ButtonIcon = ({
  size = 20,
  color = TextColor.white,
  icon,
  backgroundColor = Colors.purple500,
  customStyle,
  disable = false,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disable}>
      <View
        style={[
          styles.Container,
          { ...customStyle },
          { backgroundColor: disable ? Colors.silver : backgroundColor },
        ]}>
        {icon && <Icon name={icon} size={size} color={color} />}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 12,
  },
})

export default ButtonIcon
