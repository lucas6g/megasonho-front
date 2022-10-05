import styled from 'styled-components'

export const Container = styled.section`
  height: 812px;

  div {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-weight: 700;
      font-size: 32px;
      max-width: 935px;
      text-align: center;
      line-height: 44px;
      color: ${({ theme }) => theme.colors.white};
      margin-top: 148px;
    }
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: 1024px) {
    height: 1000px;
  }
`
