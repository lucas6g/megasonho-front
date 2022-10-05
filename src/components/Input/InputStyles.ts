import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 40px;
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
  padding-bottom: 8px;

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
export const StyledInput = styled.input<StyledInputProps>`
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
    color: #cfd3d5;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
    box-shadow: 0 0 0 30px white inset !important;
  }
`
