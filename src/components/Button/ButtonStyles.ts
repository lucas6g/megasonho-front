import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.button`
  height: 44px;
  border-radius: 100px;
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.5s;
  background-color: ${({ theme }) => theme.colors.green};
  span {
    font-weight: 500;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.white};
  }
  &:hover {
    background-color: ${darken(0.1, '#32BB4E')};
  }
`
