import arrowGreenImage from '../../assets/arrow-green.svg'
import logoBlueImage from '../../assets/logo-blue.svg'
import { Link, useNavigate } from 'react-router-dom'
import * as S from './HeaderStyles'

export function Header() {
  const navigate = useNavigate()
  return (
    <S.Header>
      <S.HeaderContent>
        <Link to={'/'}>
          <S.LogoImg src={logoBlueImage} alt="Logo" />
        </Link>
        <S.CompeteNowButton
          onClick={() => {
            navigate('/register')
          }}
        >
          <span>Concorra Agora</span>
          <img src={arrowGreenImage} alt="Arrow Green" />
        </S.CompeteNowButton>
      </S.HeaderContent>
    </S.Header>
  )
}
