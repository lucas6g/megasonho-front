import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.section`
  padding: 0 20px;
  height: 715px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-direction: column-reverse;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 128px;
    justify-content: center;
  }
`
export const ImageContainer = styled.div`
  padding: 23px 18px;
  background: linear-gradient(
    88.31deg,
    #1374de -6.73%,
    #33a3fd 51.52%,
    #d9d9d9 98.57%
  );
  border-radius: 18.6111px 18.6111px 0px 18.6111px;
  max-width: 280px;
  width: 100%;
  height: 240px;

  img {
    width: 280px;
    height: 194px;
    border-radius: 18.6111px;
  }

  @media (min-width: 1024px) {
    max-width: 520px;
    height: 414px;

    padding: 40px 32px;
    img {
      width: 524px;
      height: 334px;
      border-radius: 18.6111px;
    }
  }
`
export const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    text-align: center;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  h2 {
    font-size: 16px;
    font-weight: 500;
    line-height: 25px;
    text-align: center;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.darkBlue};
    opacity: 0.7;
  }

  @media (min-width: 1024px) {
    max-width: 480px;
    align-items: flex-start;
    justify-content: center;

    h1 {
      text-align: left;
      font-size: 32px;
    }

    h2 {
      text-align: left;
      color: ${({ theme }) => theme.colors.darkBlue};
    }
  }
`
export const CompeteNowButton = styled.button`
  border: none;
  width: 100%;
  height: 44px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.green};
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 306px;
  gap: 8px;
  font-size: 16px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.white};
  transition: all 0.4s;

  &:hover {
    background-color: ${darken(0.1, '#32BB4E')};
  }
`

export const DoPartBox = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 32px;
  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`
