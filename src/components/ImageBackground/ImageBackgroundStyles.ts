import styled from 'styled-components'

interface ImageBackgroundProps {
  imgUrl: string
}

export const ImageBackground = styled.div<ImageBackgroundProps>`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    align-items: flex-start;
    justify-content: center;

    img {
      max-width: 352px;
      width: 100%;
      margin-top: 32px;
    }

    background-position: center;
    background-image: url(${({ imgUrl }) => imgUrl});
    background-repeat: no-repeat;
  }
`
