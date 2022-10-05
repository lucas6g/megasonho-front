import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export const PaymentContainer = styled.div`
  padding: 20px;
  position: relative;
  background-position: 90%;
  background-size: cover;
  height: 100%;

  @media (min-width: 1024px) {
    background-image: unset !important;
  }
  @media (max-height: 700px) {
    height: 700px;
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

export const PaymentContent = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px 20px;
  border-radius: 4px;

  h1 {
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    line-height: 38px;
    color: ${({ theme }) => theme.colors.darkBlue};
    margin-top: 45px;
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
    margin-top: 32px;
  }

  @media (min-width: 1024px) {
    max-width: 448px;
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 28px;
    }
  }
`

export const LuckyNumberBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  strong {
    font-weight: 700;
    font-size: 17px;
    line-height: 38px;
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  height: 64px;
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 16px 20px;
  margin-bottom: 16px;

  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: ${({ theme }) => theme.colors.darkBlue};
  }
  @media (min-width: 768px) {
    strong {
      font-size: 28px;
    }
  }
`
