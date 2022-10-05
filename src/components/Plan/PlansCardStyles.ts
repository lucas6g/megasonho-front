import styled from 'styled-components'
import trevoBlue from '../../assets/trevo-blue.svg'
import trevoWhite from '../../assets/white-clover.svg'

export const Plan = styled.button`
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 16px 16px 24px 16px;
  background: #f4f4f4;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  height: 148px;
  flex-direction: column;
  display: flex;
  align-items: center;
  cursor: pointer;

  div {
    display: flex;
    align-items: center;
    gap: 8px;

    span {
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: ${({ theme }) => theme.colors.black};
    }
  }
  .price-number {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.black};
    opacity: 0.7;
  }

  strong {
    font-size: 36px;
  }

  transition: background-color 0.5s;
  .img-back {
    height: 24px;
    width: 24px;
    background-image: url(${trevoBlue});
    background-position: center;
    background-repeat: no;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.green};
    box-shadow: 0px 9px 25px rgba(0, 0, 0, 0.15);
    border: none;
    border-bottom: 4px solid #0f8427;
    .img-back {
      background-image: url(${trevoWhite});
    }

    .price-number {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.white};
      opacity: 0.7;
    }
    strong {
      color: ${({ theme }) => theme.colors.white};
    }

    div {
      span {
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`
