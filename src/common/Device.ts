import { EnumScreenSize } from '@utils/enum'

export const checkBigScreen = (width: number) =>
  width > EnumScreenSize.NORMAL ? true : false
