import React, { ReactNode } from 'react'
import { Layout, Text } from '@ui-kitten/components'
import { StyleSheet, TouchableNativeFeedback, ViewProps } from 'react-native'

import { Colors, TextColor } from 'utils/color'
import { FontStyle } from '@utils/enum'

type Props = {
  title?: string
  color?: TextColor
  backgroundColor?: Colors
  reverse?: boolean
  children?: ReactNode
  disable?: boolean
  onPress?(): void
}

const Button = ({
  title = 'Heading',
  color = TextColor.white,
  backgroundColor = Colors.purple500,
  reverse = false,
  children,
  disable = false,
  onPress,
}: Props) => {
  return (
    <TouchableNativeFeedback onPress={onPress} disabled={disable}>
      <Layout
        style={
          {
            ...styles.Container,
            flexDirection: reverse ? 'row-reverse' : 'row',
            backgroundColor: disable ? Colors.silver : backgroundColor,
          } as ViewProps
        }
      >
        {children}
        <Text
          status="primary"
          style={[styles.Heading, color && { color: color }]}
        >
          {title}
        </Text>
      </Layout>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
  Container: {
    width: 240,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Heading: {
    fontSize: 18,
    color: TextColor.white,
    fontFamily: FontStyle.MEDIUM,
    marginHorizontal: 15,
  },
})

export default Button
