import styled from 'styled-components'

export const Header = styled.header`
  height: 68px;
  width: 100%;
  padding: 0 20px;
`
export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  a {
    height: 30px;
  }
`

export const LogoImg = styled.img`
  width: 208px;
  height: 30px;

  @media (min-width: 768px) {
    width: 283px;
    height: 40px;
  }
`

export const CompeteNowButton = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gray};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    display: none;
  }

  @media (min-width: 768px) {
    max-width: 181px;
    height: 40px;
    width: 100%;
    justify-content: space-between;
    border-radius: 100px;
    padding: 0 16px;
    transition: 0.5s ease;

    span {
      color: ${({ theme }) => theme.colors.darkBlue};
      display: inline;
      font-size: 16px;
      font-weight: 500;
      transition: 0.5s ease;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.green};
      span {
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`
