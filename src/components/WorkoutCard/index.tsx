import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Layout, Text } from '@ui-kitten/components'

type Props = {
  title: string
  level?: string
  set?: number
}

const WorkoutCard = ({ title, level, set }: Props) => {
  return (
    <TouchableOpacity onPress={() => console.log('runnnn')}>
      <Layout style={styles.tab} level="2">
        <Text category="h5">{title}</Text>
        <Text category="h5">{level}</Text>
        <Text category="h5">{set}</Text>
      </Layout>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  tab: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
})

export default WorkoutCard
