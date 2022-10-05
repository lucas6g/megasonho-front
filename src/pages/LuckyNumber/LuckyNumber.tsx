import logoWhite from '../../assets/logo-white.svg'
import backFour from '../../assets/back-four.jpg'
import trevoGreen from '../../assets/trevo-green.svg'
import * as S from './LuckyNumberStyles'
import { useNavigate } from 'react-router-dom'
import { ProgressBar } from '../../components/ProgressBar/ProgressBar'
import { Button } from '../../components/Button/Button'
import { ImageBackground } from '../../components/ImageBackground/ImageBackground'
import { GradientLine } from '../../components/GradientLine/GradientLine'
import { useEffect, useState } from 'react'
import api from '../../services/api'

export function LuckyNumber() {
  const navigate = useNavigate()

  const [freeLuckyNumber, setFreeLuckyNUmber] = useState('')

  useEffect(() => {
    const handleCreateFreeLuckyNumber = async () => {
      try {
        const response = await api.post('/number-lucky/create')
        setFreeLuckyNUmber(response.data.number)
      } catch (error: any) {
        console.log(error)
      }
    }

    handleCreateFreeLuckyNumber()
  }, [])

  return (
    <S.Container>
      <ImageBackground imgUrl={backFour} />

      <S.LuckyNumberContainer
        style={{
          backgroundImage: `url(${backFour})`
        }}
      >
        <S.HeaderMobile>
          <img id="logo-white" src={logoWhite} alt="Logo Branco" />
        </S.HeaderMobile>
        <S.LuckyNumberContent>
          <ProgressBar porcentage="33.33%" />
          <h1>
            A sua sorte está nos <br /> números 🎉
          </h1>

          <p>
            Aqui está o seu número que poderã trazer a tão sonhada viagem para
            Walt Disney World?
          </p>

          <S.LuckyNumberBox>
            <strong>{freeLuckyNumber}</strong>
            <img src={trevoGreen} alt="trevo" />
          </S.LuckyNumberBox>

          <p>
            Lembre que seu número somente será válido após a conclusão do
            cadastro!
          </p>

          <Button
            onClick={() => {
              navigate('/invites')
            }}
          >
            <span>Ganhe mais números da sorte</span>
          </Button>
        </S.LuckyNumberContent>
        <GradientLine />
      </S.LuckyNumberContainer>
    </S.Container>
  )
}
