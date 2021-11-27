import React from 'react'
import { Text } from '@ui-kitten/components'
import { StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import { TextColor } from 'utils/color'
import { FontStyle } from '@utils/enum'

type Props = {
  title?: string
  color?: TextColor
  icon?: string
}

const Heading = ({
  title = 'Heading',
  color = TextColor.purple,
  icon,
}: Props) => {
  return (
    <View style={styles.Container}>
      {icon && <Icon style={styles.Icon} name={icon} size={20} color={color} />}
      <Text
        status="primary"
        style={[styles.Heading, color ? { color: color } : {}]}>
        {title}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 15,
  },
  Heading: {
    fontSize: 18,
    fontFamily: FontStyle.BOLD,
  },
  Icon: {
    paddingRight: 5,
  },
})

export default Heading
