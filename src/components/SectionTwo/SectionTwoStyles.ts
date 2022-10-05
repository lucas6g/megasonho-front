import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Container = styled.section`
  height: 552px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: linear-gradient(
    88.31deg,
    #1374de -6.73%,
    #33a3fd 51.52%,
    #d9d9d9 98.57%
  );
  @media (min-width: 1024px) {
    height: 658px;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  max-width: 1200px;
  margin: 0 auto;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`
export const InputBox = styled.div`
  h1 {
    font-size: 20px;
    font-weight: 700;
    line-height: 44px;
    text-align: center;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.white};

    @media (min-width: 768px) {
      font-size: 32px;
    }
  }

  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 25px;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 16px;
    strong {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`
export const PicturesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  #mikey-head {
    width: 100px;
    height: 100px;
  }
  #clover-icon {
    width: 57px;
    height: 57px;
  }
  #disney-castle {
    width: 90px;
    height: 120px;
  }
  #minnie-head-icon {
    width: 50px;
    height: 50px;
  }

  @media (min-width: 768px) {
    #mikey-head {
      height: 272px;
      width: 272px;
    }
    #clover-icon {
      width: 120px;
      height: 120px;
    }
    #disney-castle {
      width: 250px;
      height: 250px;
    }
    #minnie-head-icon {
      width: 100px;
      height: 100px;
    }

    @media (min-width: 1024px) {
      display: none;
    }
  }
`
export const HeadAndCloverContainer = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`
export const HeadAndCastleContainer = styled.div`
  @media (min-width: 1024px) {
    display: block;
  }
  display: none;
`

interface CompeteButtonProps {
  isError: boolean
}

export const CompeteButtonContainer = styled.form<CompeteButtonProps>`
  background-color: ${({ theme }) => theme.colors.white};
  max-width: 480px;
  margin: 0 auto;
  height: 50px;
  display: flex;
  gap: 8px;

  button {
    border: none;
    max-width: 110px;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.colors.green};
    font-weight: 500;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.white};
    transition: all 0.4s;

    &:hover {
      background-color: ${darken(0.1, '#32BB4E')};
    }
  }

  .document-container {
    width: 100%;
    position: relative;

    div {
      height: 100%;
      border-bottom: none;
    }

    ${props =>
      props.isError &&
      css`
        span {
          position: absolute;
          left: 0;
          bottom: -12px;
          font-size: 14px;
        }
      `}
  }

  padding: 8px 16px;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.05);
  border-radius: 50px;
`
