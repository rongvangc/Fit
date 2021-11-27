import React, { ReactNode } from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'

type Props = {
  customStyle?: ViewStyle
  children: ReactNode
}

const Section = ({ customStyle = {}, children }: Props) => (
  <View style={[styles.Container, { ...customStyle }]}>{children}</View>
)

const styles = StyleSheet.create({
  Container: {
    marginBottom: 15,
    paddingBottom: 2,
  },
})

export default Section
