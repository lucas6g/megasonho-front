import logoWhite from '../../assets/logo-white.svg'
import backEite from '../../assets/back-eite.jpg'
import whats from '../../assets/whatsapp.svg'
import mikeyGreen from '../../assets/mickey-green-head.svg'
import * as S from './PaymentConfirmationStyles'

import { ImageBackground } from '../../components/ImageBackground/ImageBackground'
import { GradientLine } from '../../components/GradientLine/GradientLine'
import { ProgressBar } from '../../components/ProgressBar/ProgressBar'

export function PaymentConfirmation() {
  return (
    <S.Container>
      <ImageBackground imgUrl={backEite} />

      <S.PaymentConfirmationContainer
        style={{
          backgroundImage: `url(${backEite})`
        }}
      >
        <S.HeaderMobile>
          <img id="logo-white" src={logoWhite} alt="Logo Branco" />
        </S.HeaderMobile>
        <S.PaymentConfirmationContent>
          <ProgressBar porcentage="100%" />
          <h1>Aqui será um título em destaque ✅</h1>

          <p>
            Aqui será uma descrição para completar o título e falar o número da
            sorte para o usuário:
          </p>

          <S.TextIconBox>
            <img src={mikeyGreen} alt="mikey" />
            <span>
              Aqui será uma descrição para completar alguma informação sobre o
              pagamento caso for necessário:
            </span>
          </S.TextIconBox>
          <S.TextIconBox>
            <img src={mikeyGreen} alt="mikey" />
            <span>
              Aqui será uma descrição para completar alguma informação sobre o
              pagamento caso for necessário:
            </span>
          </S.TextIconBox>
          <S.TextIconBox>
            <img src={mikeyGreen} alt="mikey" />
            <span>
              Aqui será uma descrição para completar alguma informação sobre o
              pagamento caso for necessário:
            </span>
          </S.TextIconBox>

          <S.WhatsContinueButton
            href="https://api.whatsapp.com/send?1=pt_br&phone=5511973796061&text=Ola%20MEGASONHO!"
            target={'_blank'}
          >
            <img src={whats} alt="Icone Do Whatsapp" />
            <strong> Tenho uma dúvida</strong>
          </S.WhatsContinueButton>
        </S.PaymentConfirmationContent>
        <GradientLine />
      </S.PaymentConfirmationContainer>
    </S.Container>
  )
}
