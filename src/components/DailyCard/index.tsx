import React, { ReactNode } from 'react'
import { Text, Layout } from '@ui-kitten/components'
import { StyleSheet, View, TouchableNativeFeedback } from 'react-native'

import { TextColor, Colors } from '@utils/color'
import { FontStyle } from '@utils/enum'

type Props = {
  title: string
  value: number
  prefix?: string
  backgroundColor?: Colors
  lastTimeUpdate: string
  children: ReactNode
  onPress?(): void
}

const DailyCard = ({
  title,
  value,
  prefix,
  backgroundColor = Colors.purple500,
  lastTimeUpdate,
  children,
  onPress,
}: Props) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <Layout
        style={{
          ...styles.Container,
          backgroundColor,
        }}
      >
        <Text style={styles.Title}>{title}</Text>
        <View style={styles.Progress}>{children}</View>
        <View>
          <View style={styles.ValueBox}>
            <Text style={styles.Value} category="label">
              {value}
            </Text>
            <Text style={styles.Prefix} category="p1">
              {prefix}
            </Text>
          </View>
          <Text style={styles.DateTime}>update last {lastTimeUpdate} ago</Text>
        </View>
      </Layout>
    </TouchableNativeFeedback>
  )
}

export default DailyCard

const styles = StyleSheet.create({
  Container: {
    borderRadius: 15,
    padding: 15,
    width: '48%',
    height: 230,
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  Progress: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 20,
  },
  ValueBox: {
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'baseline',
  },
  Title: {
    fontSize: 14,
    textTransform: 'uppercase',
    color: TextColor.white,
    fontFamily: FontStyle.MEDIUM,
  },
  Value: {
    fontFamily: FontStyle.BOLD,
    fontSize: 24,
    color: TextColor.white,
  },
  Prefix: {
    fontSize: 12,
    fontFamily: FontStyle.LIGHT,
    color: TextColor.white,
    paddingLeft: 3,
    lineHeight: 14,
  },
  DateTime: {
    fontSize: 12,
    fontFamily: FontStyle.MEDIUM,
    color: TextColor.white,
  },
})
