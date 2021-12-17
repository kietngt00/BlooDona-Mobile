import React from 'react'
import Svg, {Path} from 'react-native-svg'

const FacebookLogoSVG = ({width, height, style}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox='0 0 382 383'
      fill='none'
      style={style}
      xmlns='http://www.w3.org/2000/svg'>
      <Path
        d='M381.8 41.6V341.6C381.8 364.2 363.5 382.5 340.9 382.5H268.2V231.5H319.8L327.2 173.9H268.1V137.1C268.1 120.5 272.7 109.1 296.6 109.1H327.1V57.6C312.3 56 297.5 55.3 282.6 55.3C244.3 52.5 211.1 81.3 208.3 119.5C208 123.5 208.1 127.5 208.5 131.4V174H156.7V231.6H208.7V382.5H41C18.4 382.5 0.100006 364.2 0.100006 341.6V41.6C0.100006 19 18.4 0.700012 41 0.700012H341C363.5 0.700012 381.8 19.1 381.8 41.6Z'
        fill='#385590'
      />
    </Svg>
  )
}

export default FacebookLogoSVG
