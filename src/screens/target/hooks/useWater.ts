import { useState } from 'react'
import { EnumControl } from 'utils/enum'

type Control = 'minus' | 'plus'

const MAXIMUM = 5
const LIMIT = 1
const DEFAULT_VALUE = 200
const MAX_TARGET_WATER = 2000

const useWater = () => {
  const [value, setValue] = useState(200)
  const [level, setLevel] = useState(1)
  const [disable, setDisable] = useState({
    isLimit: true,
    isMaximum: false,
  })

  const onChangeLevel = (type: Control) => {
    if (type === EnumControl.MINUS) {
      if (level <= LIMIT) {
        setLevel(level)
        setDisable({
          isLimit: true,
          isMaximum: false,
        })
      } else {
        setLevel(level - 1)
        setDisable({
          isLimit: false,
          isMaximum: false,
        })
      }
    }
    if (type === EnumControl.PLUS) {
      if (level >= MAXIMUM) {
        setLevel(level)
        setDisable({
          isLimit: false,
          isMaximum: true,
        })
      } else {
        setLevel(level + 1)
        setDisable({
          isLimit: false,
          isMaximum: false,
        })
      }
    }
  }

  const onChangeValue = () => {
    const currentAdd = value + DEFAULT_VALUE * level
    currentAdd >= MAX_TARGET_WATER
      ? setValue(MAX_TARGET_WATER)
      : setValue(currentAdd)
  }

  console.log(value)

  return {
    value,
    level,
    disable,
    DEFAULT_VALUE,
    MAX_TARGET_WATER,
    onChangeValue,
    onChangeLevel,
  }
}

export default useWater
