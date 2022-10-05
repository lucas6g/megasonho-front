import { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'
import inputErrorIcon from '../../assets/input-error-icon.svg'
import checkIcon from '../../assets/check.svg'

import { Container, StyledInput, InputBlock } from './InputStyles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  error?: FieldError
  register: any
  isValid: boolean
}

export function Input({
  name,
  label,
  error,
  register,
  isValid,
  className,
  ...rest
}: InputProps) {
  return (
    <Container className={className}>
      <InputBlock isError={!!error}>
        {!!label && <label htmlFor={name}>{label}</label>}
        <div>
          <StyledInput
            isError={!!error}
            id={name}
            {...register(name)}
            {...rest}
          />
          {!!error && <img src={inputErrorIcon} alt="Icone de Erro" />}
          {!error && isValid && <img src={checkIcon} alt="Icone de Check" />}
        </div>
      </InputBlock>
      {!!error && <span>{error.message}</span>}
    </Container>
  )
}
