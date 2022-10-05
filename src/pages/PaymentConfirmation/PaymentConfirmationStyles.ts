import { darken } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export const PaymentConfirmationContainer = styled.div`
  padding: 20px;
  position: relative;
  background-position: 90%;
  background-size: cover;
  height: 100%;

  @media (min-width: 1024px) {
    background-image: unset !important;
  }
  @media (max-height: 700px) {
    height: 800px;
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

export const PaymentConfirmationContent = styled.div`
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

  @media (min-width: 1024px) {
    max-width: 448px;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 28px;
    }
  }
`

export const WhatsContinueButton = styled.a`
  height: 46px;
  border-radius: 100px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: 0.5s ease;

  img {
    width: 26px;
    height: 26px;
  }

  strong {
    font-weight: 700;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.white};
  }
  background-color: ${({ theme }) => theme.colors.green};

  margin-top: 32px;
  text-decoration: none;

  &:hover {
    background-color: ${darken(0.1, '#32BB4E')};
  }
`

export const TextIconBox = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
`
