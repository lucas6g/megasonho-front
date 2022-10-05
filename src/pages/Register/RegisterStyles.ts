import styled, { css } from 'styled-components'
import checkWhite from '../../assets/check-white.svg'

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
    margin-bottom: 30px;
  }

  @media (min-width: 1024px) {
    background-image: unset !important;
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
  #close-icon {
    height: 32px;
    width: 32px;
  }
  button {
    border: none;
    background: transparent;
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
export const Form = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px 20px;
  border-radius: 4px;

  button {
    margin-top: 32px;
  }

  @media (min-width: 1024px) {
    max-width: 448px;
  }
`
export const ProgressBarMobile = styled.div`
  margin-bottom: 45px;
  @media (min-width: 1024px) {
    display: none;
  }
`

export const ProgresseBarDesk = styled.div`
  display: none;
  margin-bottom: 45px;
  height: 43px;
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 16px;

    button {
      border: none;
      background: transparent;
      height: 32px;
      width: 32px;
      border-radius: 50%;
    }
  }
`
export const TermsCheckBox = styled.div`
  display: flex;
  gap: 10px;

  span {
    text-align: left;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
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
`

interface CheckBoxProps {
  isError: boolean
}

export const CheckBox = styled.input<CheckBoxProps>`
  min-width: 16px;
  min-height: 16px;
  max-height: 16px;
  border-radius: 4px;
  margin-top: 2px;
  border: 2px solid ${({ theme }) => theme.colors.blue};
  appearance: none;
  cursor: pointer;
  ${props =>
    props.isError &&
    css`
      border-color: ${({ theme }) => theme.colors.red};
    `};

  &:checked {
    border-color: ${({ theme }) => theme.colors.green};
    background-color: ${({ theme }) => theme.colors.green};
    background-image: url(${checkWhite});
    background-repeat: no-repeat;
  }
`
