import disneyVideo from '../../assets/disney.mp4'
import { Container } from './SectionVideoStyles'

export function SectionVideo() {
  return (
    <Container>
      <div>
        <h1>
          Viva momentos mágicos e se sinta criança novamente, presenteie-se com
          esse presente inesquecível.
        </h1>
      </div>

      <video src={disneyVideo} autoPlay loop muted />
    </Container>
  )
}
