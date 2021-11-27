import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const StepScreen = () => {
  const [step, setStep] = useState({
    isPedometerAvailable: 'checking',
    pastStepCount: 0,
    currentStepCount: 0,
  })

  return (
    <View>
      <Text>Pedometer.isAvailableAsync(): {step.isPedometerAvailable}</Text>
      <Text>Steps taken in the last 24 hours: {step.pastStepCount}</Text>
      <Text>Walk! And watch this go up: {step.currentStepCount}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default StepScreen
