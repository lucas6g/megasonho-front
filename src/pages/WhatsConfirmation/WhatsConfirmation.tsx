import logoWhite from '../../assets/logo-white.svg'
import backTree from '../../assets/back-tree.jpg'
import inputErrorIcon from '../../assets/input-error-icon.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import * as S from './WhatsConfirmationStyles'
import { ProgressBar } from '../../components/ProgressBar/ProgressBar'
import api from '../../services/api'
import { ImageBackground } from '../../components/ImageBackground/ImageBackground'
import { GradientLine } from '../../components/GradientLine/GradientLine'

export function WhatsConfirmation() {
  const [token, setToken] = useState('')

  const navigate = useNavigate()
  const [
    whatsConfirmationCodeErrorMessage,
    setWhatsConfirmationCodeErrorMessage
  ] = useState('')

  useEffect(() => {
    api
      .post('/two-factor/create', {
        two_factor_type: 'WHATSAPP'
      })
      .then((response) => {
        setToken(response.data.token)
      })
  }, [])

  const [confirmationCodeError, setConfirmationCodeError] = useState(false)

  const handleConfirmWhats = async (code: string) => {
    try {
      if (!code || code.length < 6) {
        setConfirmationCodeError(true)
        return
      }
      setConfirmationCodeError(false)
      await api.post('/two-factor/activate', {
        code,
        token
      })

      navigate('/lucky-number')
    } catch (error: any) {
      setConfirmationCodeError(true)
      setWhatsConfirmationCodeErrorMessage(error.response.data.message)
    }
  }

  return (
    <S.Container>
      <ImageBackground imgUrl={backTree} />

      <S.FormContainer
        style={{
          backgroundImage: `url(${backTree})`
        }}
      >
        <S.HeaderMobile>
          <img id="logo-white" src={logoWhite} alt="Logo Branco" />
        </S.HeaderMobile>
        <S.Form isError={confirmationCodeError}>
          <ProgressBar porcentage="22.22%" />

          <h1>Te enviamos um código via Whatsapp 📱</h1>

          <p>Digite o código que recebeu no campo abaixo</p>

          <S.Confirmation
            type="text"
            isErrored={confirmationCodeError}
            autoFocus
            onCompleted={handleConfirmWhats}
            length={6}
            placeholder=""
          />

          <S.InvalidCode isError={confirmationCodeError}>
            <img src={inputErrorIcon} alt="Icone de Erro" />
            <span>{whatsConfirmationCodeErrorMessage}</span>
          </S.InvalidCode>
          <span>
            Não recebeu? Clique <Link to={'/'}>aqui</Link> para o código ser
            reenviado.
          </span>
        </S.Form>
        <GradientLine />
      </S.FormContainer>
    </S.Container>
  )
}
