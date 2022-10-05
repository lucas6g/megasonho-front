import styled, { css } from 'styled-components'
import CodeLib from 'react-input-verification-code'

interface InputPros {
  isErrored: boolean
}

export const Confirmation = styled(CodeLib)<InputPros>``

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
  #close-icon {
    height: 32px;
    width: 32px;
  }

  #logo-white {
    max-width: 176px;
    width: 100%;
    height: 24px;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`

interface FormPros {
  isError: boolean
}

export const Form = styled.form<FormPros>`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px 20px;
  border-radius: 4px;

  h1 {
    text-align: left;
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    margin-top: 45px;
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

  span {
    text-align: left;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    color: ${({ theme }) => theme.colors.darkBlue};
    a {
      text-decoration: none;
      display: inline-block;
      color: ${({ theme }) => theme.colors.blue};
    }

    a::after {
      content: '';
      display: block;
      width: 0px;
      height: 2px;
      background: ${({ theme }) => theme.colors.blue};
      transition: width 0.7s;
    }
    a:hover::after {
      width: 100%;
    }
  }

  .ReactInputVerificationCode__container {
    width: 100%;
    margin-bottom: 16px;

    input {
      width: 0;
      height: 0;
      left: 0;
    }
  }

  .ReactInputVerificationCode__item {
    height: 38px;
    width: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    ${props =>
      props.isError &&
      css`
        border: 2px solid red;
      `};
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
