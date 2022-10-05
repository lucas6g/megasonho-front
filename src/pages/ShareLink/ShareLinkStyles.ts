import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export const ShareLinkContainer = styled.div`
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

export const ShareLinkContent = styled.div`
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

  .continue {
    margin-top: 32px;
  }

  span.text {
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

export const LinkBox = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 16px;
  border: 2px solid rgba(46, 61, 69, 0.2);
  border-radius: 4px;
  padding-left: 16px;

  input {
    width: 100%;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.blue};
    background-color: ${({ theme }) => theme.colors.gray};
    border: none;
  }

  span {
    color: ${({ theme }) => theme.colors.blue};

    justify-self: center;
  }
`

export const CopyButton = styled.button`
  height: 100%;
  max-width: 60px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  margin-top: unset;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
`
