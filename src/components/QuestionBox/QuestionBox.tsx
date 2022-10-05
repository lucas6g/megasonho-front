import arrow from '../../assets/arrow.svg'
import { Question, Container, Response } from './QuestionBoxStyles'

interface QuestionBoxProps {
  question: string
  response: string
}

export function QuestionBox({ question, response }: QuestionBoxProps) {
  return (
    <Container>
      <Question>
        <strong>{question}</strong>
        <img src={arrow} alt="Flexa" />
      </Question>
      <Response>
        <p>{response}</p>
      </Response>
    </Container>
  )
}
