import React, { ReactNode } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Layout, Card } from '@ui-kitten/components'
import { Colors } from '@utils/color'
import { FontStyle } from '@utils/enum'

type Props = {
  title: string
  color: Colors
  children?: ReactNode
  onPress: () => void
}

const LevelCard = ({
  title,
  color = Colors.purple500,
  children,
  onPress,
}: Props) => {
  return (
    <Layout level="2">
      <Card
        style={{ ...styles.Container, backgroundColor: color }}
        onPress={onPress}
      >
        <Text style={styles.Title}>{title}</Text>
        <View style={styles.Image}>{children}</View>
      </Card>
    </Layout>
  )
}

const styles = StyleSheet.create({
  Container: {
    borderRadius: 15,
    height: 100,
    borderWidth: 0,
    marginBottom: 10,
    position: 'relative',
  },
  Title: {
    fontSize: 18,
    fontFamily: FontStyle.MEDIUM,
    color: Colors.white,
  },
  Image: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
})

export default LevelCard
