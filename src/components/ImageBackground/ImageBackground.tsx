import logoWhite from '../../assets/logo-white.svg'
import * as S from './ImageBackgroundStyles'

interface ImageBackgroundProps {
  imgUrl: string
}

export function ImageBackground({ imgUrl }: ImageBackgroundProps) {
  return (
    <S.ImageBackground imgUrl={imgUrl}>
      <img src={logoWhite} alt="Logo Branco" />
    </S.ImageBackground>
  )
}
