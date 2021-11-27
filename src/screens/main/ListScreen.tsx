import React from 'react'
import { Layout, Text, Button } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'
import { DrawerScreenNavigationProp } from '@utils/type'

const ListScreen = ({ navigation }: DrawerScreenNavigationProp) => {
  return (
    <Layout style={styles.container}>
      <Text category="h1">List</Text>
      <Button onPress={() => navigation.openDrawer()}>Logout</Button>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default ListScreen
