import React from 'react'
import { Text, Layout, Card, List } from '@ui-kitten/components'
import { StyleSheet, View } from 'react-native'
import IconFeather from 'react-native-vector-icons/Feather'
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons'

import { Colors, TextColor } from '@utils/color'
import { TypeWorkoutItem, TypeWorkoutData } from '@utils/type'
import { FontStyle } from '@utils/enum'

import WorkoutSVG from '@assets/icons/WorkoutSVG'

const ListWorkout = ({ data }: TypeWorkoutData) => {
  const renderItemCard = ({ item }: TypeWorkoutItem) => {
    return (
      <Layout level="2" style={styles.CardContainer}>
        <View style={styles.BehindBackground}></View>
        <WorkoutSVG style={styles.Image} width={140} height={98} />
        <Card style={styles.Card} onPress={() => console.log('Select Card')}>
          <Text category="h4" style={styles.Title}>
            {item.title}
          </Text>
          <Layout style={styles.Info}>
            <IconFeather
              name="bar-chart-2"
              size={20}
              color={Colors.purple500}
            />
            <Text style={styles.TitleInfo}>{item.level}</Text>
          </Layout>
          <Layout style={styles.Info}>
            <IconMaterial name="timelapse" size={20} color={Colors.purple500} />
            <Text style={styles.TitleInfo}>{item.duration}m</Text>
          </Layout>
        </Card>
      </Layout>
    )
  }

  return (
    <Layout style={styles.Container}>
      <List
        data={data}
        renderItem={renderItemCard}
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </Layout>
  )
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: Colors.clear,
    marginBottom: 15,
  },
  CardContainer: {
    position: 'relative',
    paddingBottom: 4,
  },
  BehindBackground: {
    width: 160,
    height: 65,
    backgroundColor: Colors.purple200,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    position: 'absolute',
  },
  Card: {
    width: 300,
    height: 120,
    marginRight: 15,
    borderRadius: 15,
    position: 'relative',
    borderColor: Colors.purple400,
    left: 2,
    top: 2,
  },
  Image: {
    position: 'absolute',
    top: 15,
    right: 25,
    zIndex: 3,
  },
  Title: {
    color: TextColor.purple,
    fontFamily: FontStyle.MEDIUM,
    fontSize: 16,
    marginBottom: 20,
  },
  TitleInfo: {
    marginLeft: 8,
    fontSize: 14,
    color: TextColor.gray,
    fontFamily: FontStyle.LIGHT,
  },
  Info: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.clear,
    marginBottom: 5,
  },
})

export default ListWorkout
