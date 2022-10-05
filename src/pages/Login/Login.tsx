import instagranIcon from '../../assets/instagran.svg'
import whatsAppIcon from '../../assets/whatsapp.svg'
import logoWhite from '../../assets/logo-white.svg'
import { Input } from '../../components/Input/Input'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as S from './LoginStyles'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button/Button'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { login } from '../../redux/userSlice'

import api from '../../services/api'

interface User {
  uuid: string
  name: string
  access_token: string
}

interface FormData {
  email: string
  password: string
}

const formSchema = yup.object().shape({
  email: yup
    .string()
    .required('E-mail obrigatório')
    .email('Digite um e-mail válido'),
  password: yup.string().required('Senha obrigátoria')
})

export function Login() {
  const [isLoading, setLoading] = useState(false)

  const dispatch = useDispatch()

  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, touchedFields }
  } = useForm<FormData>({
    resolver: yupResolver(formSchema),

    mode: 'onBlur'
  })

  async function handleLogin(values: FormData) {
    try {
      const { email, password } = values
      setLoading(true)

      const response = await api.post<User>('/users/login', { email, password })

      const { access_token, name, uuid } = response.data
      const user = {
        access_token,
        name,
        uuid
      }
      localStorage.setItem('@MEGASONHO:user', JSON.stringify(user))
      api.defaults.headers.common.Authorization = `Bearer ${access_token}`
      dispatch(login(user))

      navigate('/whats-confirmation')
    } catch (error: any) {
      setLoading(false)
      const fieldError = error.response.data
      const message = fieldError.message
      setError('email', {
        message
      })
      setError('password', {
        message
      })
    }
  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.Content>
          <S.Header>
            <S.LogoMobile>
              <Link to={'/'}>
                <img src={logoWhite} alt="Logo Branco" />
              </Link>
            </S.LogoMobile>

            <div>
              <a
                href="https://api.whatsapp.com/send?1=pt_br&phone=5511973796061&text=Ola%20MEGASONHO!"
                target="_blank"
                rel="noreferrer"
              >
                <img src={whatsAppIcon} alt="Icone WhatsApp" />
              </a>
              <a
                href="https://www.instagram.com/megasonho.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={instagranIcon} alt="Icone instagran" />
              </a>
            </div>
          </S.Header>

          <S.SectionForm>
            <S.LogoDesktop>
              <Link to={'/'}>
                <img src={logoWhite} alt="Logo Branco" />
              </Link>
            </S.LogoDesktop>

            <S.LoginForm onSubmit={handleSubmit(handleLogin)}>
              <S.LoginFormTitle>Faça seu login</S.LoginFormTitle>
              <p>
                Após a validação, será enviado um código de acesso para seu
                WhatsApp.
              </p>
              <Input
                register={register}
                isValid={!errors.email && Boolean(touchedFields.email)}
                name="email"
                error={errors.email}
                label="E-mail:"
                type="email"
                className="input-container"
              />
              <Input
                register={register}
                isValid={!errors.password && Boolean(touchedFields.password)}
                name="password"
                error={errors.password}
                label="Senha:"
                type="password"
                className="input-container"
              />
              <Button isLoading={isLoading}>
                <span> Continuar</span>
              </Button>
            </S.LoginForm>
          </S.SectionForm>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  )
}
