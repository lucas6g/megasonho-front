import styled from 'styled-components'

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.black};
`
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const FooterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0 20px 0;
  border-bottom: 1px solid #494949;
  max-width: 1200px;
  margin: 0 20px;
  width: 100%;

  a {
    display: flex;
    align-self: center;
  }
  img {
    width: 161px;
    height: 24px;
  }
  div {
    display: flex;
    gap: 16px;
    img {
      width: 24px;
      height: 24px;
    }
  }

  @media (min-width: 768px) {
    img {
      width: 227px;
      height: 32px;
    }
    div {
      img {
        width: 32px;
        height: 32px;
      }
    }
  }
`

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    padding: unset;
    flex-direction: row;
  }
`
export const LinksBlockTitle = styled.strong`
  font-size: 18px;
  font-weight: 700;
  margin-top: 32px;

  color: ${({ theme }) => theme.colors.white};
`
export const LinksBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
`
export const CertificateBox = styled.div`
  @media (min-width: 1024px) {
    max-width: 647px;
    display: flex;
    div {
      p {
        margin-top: 12px;
      }
    }
  }
`
export const CertificateContent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  img {
    margin-bottom: 16px;
    width: 132px;
    height: 132px;
  }
  div {
    p {
      font-size: 16px;
      font-weight: 500;
      line-height: 25px;
      color: ${({ theme }) => theme.colors.white};
      opacity: 0.6;
    }
  }
  @media (min-width: 1024px) {
    justify-content: space-between;
    align-items: center;
    display: flex;
    margin-top: 32px;
    div {
      p {
        margin-top: 12px;
      }
    }
  }
  @media (min-width: 1024px) and (max-width: 1220px) {
    padding: 0 20px;
  }
`

export const FooterBottom = styled.div`
  padding: 20px;
  border-top: 1px solid #494949;
`
export const FooterBottomContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
    span {
      font-size: 16px;
      font-weight: 500;
      line-height: 25px;
      color: ${({ theme }) => theme.colors.white};
    }
  }
  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 25px;
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.8;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    p {
      max-width: 691px;
    }
  }
`
