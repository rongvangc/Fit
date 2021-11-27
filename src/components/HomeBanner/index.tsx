import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { Layout } from '@ui-kitten/components'
import Icon from 'react-native-vector-icons/Feather'

import { Colors } from '@utils/color'

const Avatar = require('../../assets/images/capoo-ava.jpg')
const BottomVector = require('../../assets/images/bottom-vector.png')

type Props = {
  openDrawerHandler: () => void
}

const HomeBanner = ({ openDrawerHandler }: Props) => {
  return (
    <Layout level="2" style={styles.Container}>
      <View style={styles.Banner}>
        <View style={styles.Header}>
          <TouchableOpacity style={styles.Menu} onPress={openDrawerHandler}>
            <Icon name="menu" size={30} color={Colors.white} />
          </TouchableOpacity>
          <View style={styles.User}>
            <Image style={styles.Avatar} source={Avatar} />
          </View>
        </View>
      </View>
      <Image style={styles.BottomVector} source={BottomVector} />
    </Layout>
  )
}

const styles = StyleSheet.create({
  Container: {
    paddingBottom: 15,
  },
  Banner: {
    height: 250,
    backgroundColor: Colors.purple500,
    marginBottom: -1,
  },
  BottomVector: {
    width: '100%',
    height: 60,
  },
  Header: {
    width: '100%',
    height: 70,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  Menu: {
    marginLeft: 15,
  },
  User: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Colors.white,
    overflow: 'hidden',
    marginRight: 15,
  },
  Avatar: {
    width: 40,
    height: 40,
  },
})

export default HomeBanner
