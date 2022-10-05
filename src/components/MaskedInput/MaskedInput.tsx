import { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'
import { Container, InputBlock, StyledInput } from './MaskedInputStyles'
import inputErrorIcon from '../../assets/input-error-icon.svg'
import checkIcon from '../../assets/check.svg'

interface MaskedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  error?: FieldError
  register: any
  mask: string
  isValid: boolean
}

export function MaskedInput({
  name,
  label,
  error,
  register,
  mask,
  className,
  isValid,
  ...rest
}: MaskedInputProps) {
  return (
    <Container className={className}>
      <InputBlock isError={!!error}>
        {!!label && <label htmlFor={name}>{label}</label>}
        <div>
          <StyledInput
            mask={mask}
            maskPlaceholder={''}
            isError={!!error}
            id={name}
            {...register(name)}
            {...rest}
          />
          {error && <img src={inputErrorIcon} alt="Icone de Erro" />}
          {!error && isValid && <img src={checkIcon} alt="Icone de Check" />}
        </div>
      </InputBlock>
      {!!error && <span>{error.message}</span>}
    </Container>
  )
}
