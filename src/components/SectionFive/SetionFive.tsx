import { useNavigate } from 'react-router-dom'
import competeNowCloverIcon from '../../assets/competenow-clover.svg'
import isFreImage from '../../assets/is-free.jpg'
import { QuestionBox } from '../QuestionBox/QuestionBox'
import * as S from './SectionFiveStyles'
export function SectionFive() {
  const navigate = useNavigate()

  return (
    <S.Container>
      <S.IsFreeContent>
        <S.BoxOne>
          <h1>Mickey Mouse e Cinderela e estão te esperando.</h1>
          <S.CompeteNowButton
            onClick={() => {
              navigate('/register')
            }}
          >
            <span>Concorra agora mesmo</span>
            <img src={competeNowCloverIcon} alt="Trevo da sorte" />
          </S.CompeteNowButton>
        </S.BoxOne>
        <img id="is-free" src={isFreImage} alt="Card É Gratis" />
      </S.IsFreeContent>
      <S.QuestinsContainer>
        <h1>
          Ainda está com dúvidas? <span>Vamos te ajudar!</span>
        </h1>
        <QuestionBox
          question="O que está incluso na viagem ?"
          response="Hospedagem, entrada para as atrações e mais $10.000 para gastar como quiser."
        />
        <QuestionBox
          question="O que está incluso na viagem ?"
          response="Hospedagem, entrada para as atrações e mais $10.000 para gastar como quiser."
        />
        <QuestionBox
          question="Com quem posso falar sobre as datas ?"
          response="Hospedagem, entrada para as atrações e mais $10.000 para gastar como quiser."
        />
        <QuestionBox
          question="O que está incluso na viagem ?"
          response="Hospedagem, entrada para as atrações e mais $10.000 para gastar como quiser."
        />
      </S.QuestinsContainer>
    </S.Container>
  )
}
