import logoWhite from '../../assets/logo-white.svg'
import backNine from '../../assets/back-nine.jpg'
import copyIcon from '../../assets/copy-blue.svg'
import * as S from './ShareLinkStyles'
import { useNavigate } from 'react-router-dom'
import { ImageBackground } from '../../components/ImageBackground/ImageBackground'
import { ProgressBar } from '../../components/ProgressBar/ProgressBar'
import { Button } from '../../components/Button/Button'
import { GradientLine } from '../../components/GradientLine/GradientLine'
import useCopy from 'use-copy'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

export function ShareLink() {
  const navigate = useNavigate()

  const { user } = useSelector((state: RootState) => state.user)

  const baseUrl = window.location.origin

  const shareLinkUrl = `${baseUrl}/register?reference=${user ? user.uuid : ''}`
  const [copied, copy, setCopied] = useCopy(shareLinkUrl)

  function handleCopyToClipBoard() {
    copy()

    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  return (
    <S.Container>
      <ImageBackground imgUrl={backNine} />

      <S.ShareLinkContainer
        style={{
          backgroundImage: `url(${backNine})`
        }}
      >
        <S.HeaderMobile>
          <img id="logo-white" src={logoWhite} alt="Logo Branco" />
        </S.HeaderMobile>
        <S.ShareLinkContent>
          <ProgressBar porcentage="66.66%" />

          <h1>Aumente as suas chances 😍🎢</h1>

          <p>
            Esse é o seu link compartilhamento, cada pessoa que utilizar você
            ganha mais pontos!
          </p>

          <S.LinkBox>
            <input readOnly type="text" value={shareLinkUrl} />

            <S.CopyButton onClick={handleCopyToClipBoard}>
              {copied ? (
                <span>Copiado</span>
              ) : (
                <img src={copyIcon} alt="Icone de Copiar" />
              )}
            </S.CopyButton>
          </S.LinkBox>

          <span className="text">
            Lembre-se você só ganha pontos se quem usar seu link, concluir o
            cadastro.
          </span>

          <Button
            className="continue"
            onClick={() => {
              navigate('/plans')
            }}
          >
            <span>Continuar</span>
          </Button>
        </S.ShareLinkContent>
        <GradientLine />
      </S.ShareLinkContainer>
    </S.Container>
  )
}
