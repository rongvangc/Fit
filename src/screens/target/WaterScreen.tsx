import React from 'react'
import { Text, Layout } from '@ui-kitten/components'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

// Component
import TopNavigationButton from '@components/TopNavigation'
import ButtonIcon from '@components/ButtonIcon'
import Button from '@components/Button'
import LineProgress from '@components/LineProgress'

// SVG
import WaterBottleSVG from '@assets/icons/WaterBottleSVG'

// Utils
import { MainScreenNavigationProp } from '@utils/type'
import { FontStyle } from '@utils/enum'
import { Colors, TextColor } from '@utils/color'
import useWater from './hooks/useWater'

const WaterScreen = ({ navigation }: MainScreenNavigationProp) => {
  const {
    value,
    level,
    disable,
    DEFAULT_VALUE,
    MAX_TARGET_WATER,
    onChangeValue,
    onChangeLevel,
  } = useWater()
  return (
    <Layout style={{ backgroundColor: Colors.white, flex: 1 }}>
      <TopNavigationButton navigation={navigation} />
      <Layout style={styles.Container}>
        <View style={styles.TopDetail}>
          <Text style={styles.TopText}>HYDRATION</Text>
          <Text style={styles.Text}>Today you took</Text>
          <View style={styles.TextBox}>
            <Text style={styles.WaterText}>{value}ml </Text>
            <Text style={styles.Text}>of Water</Text>
          </View>
        </View>

        <LineProgress value={value} maxValue={MAX_TARGET_WATER} />
      </Layout>
      <Layout style={styles.Control}>
        <View style={styles.ControlBox}>
          <ButtonIcon
            icon="minus"
            size={24}
            onPress={() => onChangeLevel('minus')}
            disable={disable.isLimit}
          />
          <View style={styles.WaterIcon}>
            <WaterBottleSVG width={70} height={50} />
          </View>
          <ButtonIcon
            icon="plus"
            size={24}
            onPress={() => onChangeLevel('plus')}
            disable={disable.isMaximum}
          />
        </View>
        <Text style={styles.Description}>
          {level}x Glass {DEFAULT_VALUE * level} ml
        </Text>
        <Button
          title={
            value >= MAX_TARGET_WATER ? 'Enough for today' : 'Add to drink'
          }
          disable={value >= MAX_TARGET_WATER}
          onPress={onChangeValue}>
          <Icon name="water-sharp" size={20} color={Colors.white} />
        </Button>
      </Layout>
    </Layout>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  Control: {
    height: 250,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingTop: 20,
    backgroundColor: Colors.gainsBoro,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ControlBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ControlButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gainsBoro,
    paddingBottom: 15,
  },
  TopDetail: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
  },
  TopText: {
    fontFamily: FontStyle.MEDIUM,
    color: TextColor.purple,
    fontSize: 12,
    paddingBottom: 10,
  },
  TextBox: {
    flexDirection: 'row',
  },
  Text: {
    fontFamily: FontStyle.BOLD,
    color: TextColor.black,
    fontSize: 24,
    lineHeight: 28,
  },
  WaterText: {
    fontFamily: FontStyle.BOLD,
    fontSize: 24,
    color: TextColor.purple,
    lineHeight: 28,
  },
  WaterIcon: {
    backgroundColor: Colors.white,
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  Description: {
    fontFamily: FontStyle.MEDIUM,
    marginVertical: 30,
    fontSize: 14,
  },
})

export default WaterScreen
