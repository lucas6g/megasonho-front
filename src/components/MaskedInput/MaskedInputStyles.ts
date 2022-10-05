import styled from 'styled-components'
import InputMask from 'react-input-mask'

export const Container = styled.div`
  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    color: ${({ theme }) => theme.colors.red};
  }
`

interface InputBlockProps {
  isError: boolean
}

export const InputBlock = styled.div<InputBlockProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: none;
  border-bottom: 1px solid #cfd3d5;

  div {
    display: flex;
    align-items: center;
  }

  label {
    font-weight: 700;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.darkBlue};
    opacity: 0.7;
  }
`
interface StyledInputProps {
  isError: boolean
}
export const StyledInput = styled(InputMask)<StyledInputProps>`
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkBlue};

  &::placeholder {
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    color: ${({ theme }) => theme.colors.darkBlue};
    opacity: 0.6;
  }
`
