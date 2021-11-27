import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from '@react-navigation/drawer'

const DrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <View style={styles.screen}>
      <DrawerContentScrollView {...props}>
        <View style={styles.header}>
          <View style={styles.mainContent}>
            <Text>đawa</Text>
          </View>
          <View>
            <Text>đawa</Text>
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  mainContent: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    height: 24,
    fontFamily: 'blBold',
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'blMd',
    fontStyle: 'italic',
  },
  recipe: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
    borderRadius: 5,
    width: '48%',
    padding: 5,
    borderWidth: 2,
  },
  paraIcon: {
    marginLeft: 5,
  },
  paraTitle: {
    fontFamily: 'blBold',
  },
  menuItem: {
    fontFamily: 'blMd',
    fontSize: 16,
    color: '#484848',
  },
})

export default DrawerContent
