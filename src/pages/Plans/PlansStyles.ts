import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export const PlansContainer = styled.div`
  padding: 20px;
  position: relative;
  background-position: 90%;
  background-size: cover;

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

export const PlansContent = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px 20px;
  border-radius: 4px;

  h1 {
    text-align: left;
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    color: ${({ theme }) => theme.colors.darkBlue};
    margin-top: 32px;
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

  strong {
    font-size: 45px;
  }

  @media (min-width: 1024px) {
    max-width: 448px;
  }
`
export const ProgressBarMobile = styled.div`
  margin-bottom: 32px;
  img {
    margin-left: 60%;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`

export const NumbersPlansBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const TimeBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 32px;
  span {
    font-size: 90px;
    line-height: 100px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.yellow};
  }
`

export const LuckNumberPlan100Button = styled.button`
  width: 100%;
  background: transparent;
  border: none;
  margin-bottom: 16px;

  img {
    width: 100%;
  }
`
