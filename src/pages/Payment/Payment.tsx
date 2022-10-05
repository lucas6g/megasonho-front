import logoWhite from '../../assets/logo-white.svg'
import backSeven from '../../assets/back-seven.jpg'
import pix from '../../assets/pix.svg'
import * as S from './PaymentStyles'
import { useNavigate } from 'react-router-dom'
import { ImageBackground } from '../../components/ImageBackground/ImageBackground'
import { ProgressBar } from '../../components/ProgressBar/ProgressBar'
import { Button } from '../../components/Button/Button'
import { GradientLine } from '../../components/GradientLine/GradientLine'

export function Payment() {
  const navigate = useNavigate()

  return (
    <S.Container>
      <ImageBackground imgUrl={backSeven} />

      <S.PaymentContainer
        style={{
          backgroundImage: `url(${backSeven})`
        }}
      >
        <S.HeaderMobile>
          <img id="logo-white" src={logoWhite} alt="Logo Branco" />
        </S.HeaderMobile>
        <S.PaymentContent>
          <ProgressBar porcentage="88.88%" />

          <h1>Aqui será um título em destaque 🥳</h1>

          <p>
            Aqui será uma descrição para completar o título e falar o número da
            sorte para o usuário:
          </p>

          <S.LuckyNumberBox>
            <img src={pix} alt="trevo" />
            <strong>16.623.206/0001-08</strong>
          </S.LuckyNumberBox>

          <span>
            Aqui será uma descrição para completar alguma informação sobre o
            pagamento caso for necessário:
          </span>

          <Button
            onClick={() => {
              navigate('/payment-confirmation')
            }}
          >
            <span>Realizei o pagamento</span>
          </Button>
        </S.PaymentContent>
        <GradientLine />
      </S.PaymentContainer>
    </S.Container>
  )
}
