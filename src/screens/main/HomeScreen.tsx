import React from 'react'
import { Layout } from '@ui-kitten/components'
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native'

import HomeBanner from '@components/HomeBanner'
import ListWorkout from '@components/ListWorkout'
import Heading from '@components/Heading'
import LevelCard from '@components/LevelCard'
import ProgressBar from '@components/ProgressBar'
import Section from '@common/Section'
import DailyCard from '@components/DailyCard'
import BeginnerSVG from '@assets/icons/BeginnerSVG'
import MediumSVG from '@assets/icons/MediumSVG'
import HardSVG from '@assets/icons/HardSVG'
import ExtremelySVG from '@assets/icons/ExtremelySVG'
import WaterBottleSVG from '@assets/icons/WaterBottleSVG'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5Pro'

import { Colors } from '@utils/color'
import { NestedDrawer } from '@utils/type'

import data from 'dummy/workout.json'

const HomeScreen = ({ navigation }: NestedDrawer) => {
  const openDrawerHandler = () => {
    navigation.openDrawer()
  }
  const openTargetScreen = (screen: any) => {
    navigation.navigate(screen)
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <HomeBanner openDrawerHandler={openDrawerHandler} />
        <Layout level="2" style={styles.Container}>
          <Heading title="Populate workouts" icon="star" />
          <ListWorkout data={data} />
          <Heading title="Daily targets" icon="trello" />
          <Section
            customStyle={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              marginBottom: 0,
            }}>
            <DailyCard
              title="Calories"
              prefix="cal"
              value={500}
              lastTimeUpdate="3"
              onPress={() => openTargetScreen('Calories')}>
              <ProgressBar strokeWidth={20} color={Colors.blue} />
            </DailyCard>
            <DailyCard
              title="Weight"
              prefix="kg"
              value={50}
              lastTimeUpdate="3"
              backgroundColor={Colors.purple600}
              onPress={() => openTargetScreen('Weight')}>
              <MaterialCommunityIcons
                name="chart-timeline-variant"
                size={80}
                color={Colors.white}
              />
            </DailyCard>
            <DailyCard
              title="Water"
              prefix="ml"
              value={750}
              lastTimeUpdate="3"
              backgroundColor={Colors.darkBlue}
              onPress={() => openTargetScreen('Water')}>
              <WaterBottleSVG width={100} height={90} />
            </DailyCard>
            <DailyCard
              title="Step"
              value={9750}
              lastTimeUpdate="3"
              backgroundColor={Colors.gray}
              onPress={() => openTargetScreen('Step')}>
              <ProgressBar round>
                <FontAwesome5 name="running" size={36} color={Colors.white} />
              </ProgressBar>
            </DailyCard>
          </Section>
          <Heading title="Plan workouts" icon="clipboard" />
          <Section customStyle={{ marginBottom: 0 }}>
            <LevelCard
              title="Beginner"
              color={Colors.purple300}
              onPress={() => console.log('run')}>
              <BeginnerSVG width={120} height={80} />
            </LevelCard>
            <LevelCard
              title="Medium"
              color={Colors.purple400}
              onPress={() => console.log('run')}>
              <MediumSVG width={120} height={80} />
            </LevelCard>
            <LevelCard
              title="Hard"
              color={Colors.purple500}
              onPress={() => console.log('run')}>
              <HardSVG width={120} height={80} />
            </LevelCard>
            <LevelCard
              title="Extremely"
              color={Colors.purple600}
              onPress={() => console.log('run')}>
              <ExtremelySVG width={120} height={80} />
            </LevelCard>
          </Section>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingHorizontal: 10,
  },
})

export default HomeScreen
