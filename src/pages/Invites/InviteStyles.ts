import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export const FormContainer = styled.div`
  padding: 20px;
  position: relative;
  background-position: 90%;
  background-size: cover;
  height: auto;

  .input-container {
    margin-bottom: 16px;
  }
  @media (min-width: 1024px) {
    background-image: unset !important;
    padding: 0 20px;
  }
  @media (min-height: 940px) {
    height: 100%;
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
export const Form = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px 20px;
  border-radius: 4px;

  h1 {
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

  @media (min-width: 1024px) {
    max-width: 448px;
  }
`

export const IndicationLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;

  strong {
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.darkBlue};
    opacity: 0.9;
  }
`
