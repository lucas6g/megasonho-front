import styled from 'styled-components'
import backLogin from '../../assets/back-login.jpg'

export const Container = styled.div`
  background-image: url(${backLogin});
  background-position: center;
  background-size: cover;
  height: 100vh;
`
export const Wrapper = styled.div`
  padding: 20px;
  height: 100%;
  background: linear-gradient(
    82.38deg,
    rgba(27, 27, 27, 0.5) 40.03%,
    rgba(27, 27, 27, 0) 84.29%
  );
`

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 1024px) {
    padding-top: 20px;
  }
`
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1024px) {
    justify-content: flex-end;
  }
`
export const LogoMobile = styled.div`
  a {
    img {
      max-width: 176px;
      width: 100%;
      height: 24px;
    }
  }

  @media (min-width: 1024px) {
    display: none;
  }
`
export const SectionForm = styled.section`
  @media (min-width: 1024px) {
    display: flex;
    margin-top: 108px;
    align-items: flex-start;
    justify-content: space-between;
  }
`
export const LogoDesktop = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    margin-top: 64px;

    a {
      img {
        max-width: 512px;
        width: 100%;
        height: 72px;
      }
    }
  }
`
export const LoginForm = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  width: 100%;
  padding: 40px 24px;

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    color: ${({ theme }) => theme.colors.darkBlue};
    opacity: 0.6;
    margin: 8px 0;
  }

  @media (min-width: 1024px) {
    max-width: 360px;
  }
`
export const LoginFormTitle = styled.h1`
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.darkBlue};
`
