import styled from 'styled-components'

export const Container = styled.details`
  &[open] summary img {
    transform: rotate(180deg);
  }

  border-bottom: 1px solid #e6e6e6;
`
export const Question = styled.summary`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  cursor: pointer;
  list-style-type: none;

  img {
    display: inline-block;
    width: 16px;
    height: 10px;
    transition: transform 0.26s;
    margin-top: 8px;
  }

  strong {
    font-size: 16px;
    font-weight: 500;
    line-height: 30px;
    text-align: left;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.black};
  }
  @media (min-width: 1024px) {
    strong {
      font-size: 20px;
    }
  }
`
export const Response = styled.div`
  p {
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    text-align: left;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.black};
    opacity: 0.5;
  }
`
