import mikeyBlue from '../../assets/mickey-blue-head.svg'
import { Container, Bar, Progress, IconContainer } from './ProgressBarStyles'

interface ProgressBarProps {
  porcentage: string
}

export function ProgressBar({ porcentage }: ProgressBarProps) {
  return (
    <Container>
      <IconContainer porcentage={porcentage}>
        <img src={mikeyBlue} alt="Icone Cabeça do mikey azul" />
      </IconContainer>
      <Bar>
        <Progress porcentage={porcentage} />
      </Bar>
    </Container>
  )
}
