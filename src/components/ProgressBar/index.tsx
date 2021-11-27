import React, { useRef, useEffect, ReactNode } from 'react'
import { Animated, View, Text, StyleSheet } from 'react-native'
import Svg, { G, Circle } from 'react-native-svg'

import { Colors } from '@utils/color'

type Props = {
  size?: number
  percentage?: number
  strokeWidth?: number
  duration?: number
  color?: Colors
  opacityColor?: Colors
  delay?: number
  max?: number
  rotation?: string
  round?: boolean
  children?: ReactNode
}

const ProgressBar = ({
  size = 100,
  percentage = 75,
  strokeWidth = 10,
  duration = 1000,
  color = Colors.purple300,
  opacityColor = Colors.purple300,
  delay = 0,
  rotation = '-90',
  round = false,
  max = 100,
  children,
}: Props) => {
  const center = size / 2
  const radius = size / 2 - strokeWidth / 2
  const circumference = 2 * Math.PI * radius
  const animated = useRef(new Animated.Value(0)).current
  const circleRef = useRef<Text>(null)

  const animation = (toValue: number) => {
    return Animated.timing(animated, {
      toValue,
      delay,
      duration,
      useNativeDriver: true,
    }).start()
  }

  useEffect(() => {
    animation(percentage)
    animated.addListener((v) => {
      const maxPerc = (100 * v.value) / max
      const strokeDashoffset = circumference - (circumference * maxPerc) / 100
      if (circleRef?.current) {
        circleRef.current.setNativeProps({
          strokeDashoffset,
        })
      }
    })

    return () => {
      animated.removeAllListeners()
    }
  })

  return (
    <View style={styles.Container}>
      <View style={styles.Icon}>{children}</View>
      <Svg width={size} height={size}>
        <G rotation={rotation} origin={`${center}, ${center}`}>
          <Circle
            cx={center}
            cy={center}
            r={radius}
            stroke={opacityColor || color}
            strokeWidth={strokeWidth}
            fill={Colors.clear}
            strokeOpacity={0.5}
          />
          <Circle
            ref={circleRef}
            cx={center}
            cy={center}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            strokeLinecap={round ? 'round' : 'butt'}
          />
        </G>
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Icon: {
    position: 'absolute',
  },
})

export default ProgressBar
