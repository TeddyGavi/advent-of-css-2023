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
}

interface IIcon {
  id: string
  color?: colors
  size?: number
}

export default function Icon({ id, color = 'black', size = 24 }: IIcon) {
  console.log(color)
  return (
    <svg className={`fill-${color}`} width={size} height={size}>
      <use href={`/sprite-icon/sprite.svg#${id}`} />
    </svg>
  )
}
