import styled, { css } from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export const LuckyNumberContainer = styled.div`
  padding: 8px;
  position: relative;
  background-position: 90%;
  background-size: cover;
  height: 100%;

  @media (min-width: 1024px) {
    background-image: unset !important;
  }
`
export const HeaderMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  #logo-white {
    max-width: 176px;
    width: 100%;
    height: 24px;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`

export const LuckyNumberContent = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px 20px;
  border-radius: 4px;

  h1 {
    margin-top: 16px;
    text-align: left;
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  p {
    text-align: left;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    color: ${({ theme }) => theme.colors.darkBlue};
    margin-top: 16px;
    margin-bottom: 16px;
  }
  button {
    margin-top: 40px;
  }

  @media (min-width: 1024px) {
    max-width: 448px;
  }
`

interface InvalidCodeProps {
  isError: boolean
}

export const InvalidCode = styled.div<InvalidCodeProps>`
  display: none;
  align-items: center;
  height: 20px;
  gap: 8px;
  margin-bottom: 16px;
  img {
    height: 20px;
    width: 20px;
  }

  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  ${props =>
    props.isError &&
    css`
      display: flex;
    `};
`

export const LuckyNumberBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 16px 20px;
  margin-bottom: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  strong {
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`
