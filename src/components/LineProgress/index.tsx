import React from 'react'
import { Text, StyleSheet, View, useWindowDimensions } from 'react-native'

// Animation
import { MotiView } from 'moti'

// Utils
import { Colors } from 'utils/color'
import { FontStyle } from 'utils/enum'

type Props = {
  value: number
  maxValue: number
}

const LineProgress = ({ value, maxValue }: Props) => {
  const percentWaterBar = (useWindowDimensions().width - 38) / maxValue
  return (
    <View style={styles.OuterBox}>
      <MotiView
        from={{
          left: 0,
        }}
        animate={{
          left: value * percentWaterBar - 27,
        }}
        transition={{
          delay: 300,
          type: 'timing',
        }}
        style={styles.Circle}
      >
        <Text style={styles.CircleText}>{value}</Text>
        <View style={styles.Arrow}></View>
      </MotiView>
      <MotiView
        from={{
          width: 0,
        }}
        animate={{
          width: value * percentWaterBar,
        }}
        transition={{
          delay: 300,
          type: 'timing',
        }}
        style={styles.InnerBox}
      >
        <View style={styles.Dot1} />
        <View style={styles.Dot2} />
        <View style={styles.Dot3} />
      </MotiView>
    </View>
  )
}

const styles = StyleSheet.create({
  OuterBox: {
    width: '100%',
    height: 50,
    borderRadius: 30,
    padding: 4,
    backgroundColor: Colors.ocean,
    justifyContent: 'center',
    position: 'relative',
  },
  Circle: {
    width: 60,
    height: 60,
    backgroundColor: Colors.purple500,
    borderRadius: 15,
    bottom: 65,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  CircleText: {
    color: Colors.white,
    fontFamily: FontStyle.MEDIUM,
    fontSize: 16,
    lineHeight: 20,
  },
  InnerBox: {
    height: '100%',
    borderRadius: 30,
    backgroundColor: Colors.cyan,
  },
  Arrow: {
    bottom: -10,
    position: 'absolute',
    borderRightWidth: 10,
    borderLeftWidth: 10,
    borderTopWidth: 10,
    borderTopColor: Colors.purple500,
    borderRightColor: Colors.clear,
    borderLeftColor: Colors.clear,
  },
  Dot1: {
    position: 'absolute',
    top: 15,
    right: '10%',
    width: 10,
    height: 10,
    borderRadius: 30,
    backgroundColor: Colors.white,
  },
  Dot2: {
    position: 'absolute',
    top: 7,
    right: '70%',
    width: 7,
    height: 7,
    borderRadius: 30,
    backgroundColor: Colors.white,
  },
  Dot3: {
    position: 'absolute',
    top: 30,
    right: '40%',
    width: 5,
    height: 5,
    borderRadius: 30,
    backgroundColor: Colors.white,
  },
})

export default LineProgress
