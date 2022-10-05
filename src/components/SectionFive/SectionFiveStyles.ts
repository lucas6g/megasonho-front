import styled from 'styled-components'
import { darken } from 'polished'
export const Container = styled.div`
  @media (min-width: 1024px) {
    padding-top: 139px;
    height: 1100px;
  }
`
export const IsFreeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;

  #is-free {
    width: 100%;
    height: 400px;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 150px;
    #is-free {
      max-width: 538px;
      height: 300px;
    }
  }
`
export const BoxOne = styled.div`
  align-self: flex-start;
  width: 100%;
  margin-top: 80px;
  h1 {
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    text-align: center;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.darkBlue};
  }
  @media (min-width: 1024px) {
    h1 {
      font-size: 32px;
      line-height: 44px;
      text-align: left;
    }
  }
`

export const CompeteNowButton = styled.button`
  border: none;
  width: 100%;
  height: 44px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.green};
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.white};
  transition: all 0.4s;
  &:hover {
    background-color: ${darken(0.1, '#32BB4E')};
  }
  @media (min-width: 1024px) {
    max-width: 306px;
  }
`

export const QuestinsContainer = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  h1 {
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    text-align: left;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.darkBlue};

    span {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
  @media (min-width: 1024px) {
    max-width: 1200px;
    margin: 0 auto;

    h1 {
      font-size: 32px;
      line-height: 44px;
    }
  }
`
