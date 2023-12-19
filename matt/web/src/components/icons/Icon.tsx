export interface IconId {
  id:
    | 'plus'
    | 'calendar'
    | 'check'
    | 'chevron'
    | 'close'
    | 'eyeClosed'
    | 'logout'
    | 'minus'
    | 'question'
    | 'eyeOpened'
    | 'thumbsDown'
    | 'thumbsUp'
    | 'upload'
    | 'user'
}

export enum colors {
  supernova = '#fac900',
  spicyMustard = '#6e5a0d',
  bombay = '#aeaeae',
  orangeRed = '#ff4600',
  cognac = '#9a360e',
  fireEngineRed = '#c52425',
  silverTree = '#70bd91',
  turquoiseGreen = '#a0ccb7',
  spanishGreen = '#008a52',
  cruseo = '#0a5d2c',
  countyGreen = '#003d19',
  acadia = '#392f2d',
  scotchMist = '#efe9cb',
  nileBlue = '#243853',
  blackPearl = '#071126',
  pastelMagenta = '#ff9dbf',
  padua = '#b1e3cc',
  vistaBlue = '#94d1b4',
  white = '#ffffff',
  black = '#000000',
}

interface IIcon {
  id: IconId['id']
  color?: colors
  size?: number
}

export default function Icon({ id, color, size = 24 }: IIcon) {
  const iconStyle = {
    fill: color,
  }
  return (
    <svg width={size} height={size}>
      <use style={iconStyle} href={`/sprite-icon/sprite.svg#${id}`} />
    </svg>
  )
}
