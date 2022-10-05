import dragonImage from '../../assets/dragon.jpg'
import competeNowCloverIcon from '../../assets/competenow-clover.svg'
import friendsImage from '../../assets/friends.jpg'
import * as S from './SectionTreeStyles'
import { useNavigate } from 'react-router-dom'
export function SectionTree() {
  const navigate = useNavigate()

  return (
    <S.Container>
      <S.Content>
        <S.ImageContainer>
          <img src={dragonImage} alt="Drago harry potter" />
        </S.ImageContainer>

        <S.ContentBlock>
          <h1>Rei Leão, Harry Potter, Star Wars e muito mais!</h1>
          <h2>
            Sabe o sonho que esperou trinta anos para realizar, suas próximas
            férias serão na Disney com certeza e o melhor de tudo, de graça.
          </h2>

          <S.CompeteNowButton
            onClick={() => {
              navigate('/register')
            }}
          >
            <span>Concorra agora mesmo</span>
            <img src={competeNowCloverIcon} alt="Trevo" />
          </S.CompeteNowButton>
          <S.DoPartBox>
            <img src={friendsImage} alt="Amigos" />
            <span>Faça parte você também!</span>
          </S.DoPartBox>
        </S.ContentBlock>
      </S.Content>
    </S.Container>
  )
}
