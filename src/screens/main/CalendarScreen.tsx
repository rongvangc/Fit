import React from 'react'
import { Layout, Text, Button } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'

const CalendarScreen = () => {
  return (
    <Layout style={styles.container}>
      <Text category="h1">Calendar</Text>
      <Button onPress={() => {}}>Logout</Button>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default CalendarScreen
