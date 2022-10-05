import logoWhite from '../../assets/logo-white.svg'
import closeIcon from '../../assets/close.svg'
import { MaskedInput } from '../../components/MaskedInput/MaskedInput'
import * as yup from 'yup'
import { validate } from 'gerador-validador-cpf'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Input } from '../../components/Input/Input'
import backOneImage from '../../assets/back-one.jpg'
import * as S from './RegisterStyles'
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams
} from 'react-router-dom'
import { ProgressBar } from '../../components/ProgressBar/ProgressBar'
import api from '../../services/api'
import { Button } from '../../components/Button/Button'
import { ImageBackground } from '../../components/ImageBackground/ImageBackground'
import imageBackTwo from '../../assets/back-two.jpg'
import { GradientLine } from '../../components/GradientLine/GradientLine'
import { useState } from 'react'

interface FormData {
  document: string
  name: string
  phone: string
  email: string
  cellphoneConfirmation: string
  emailConfirmation: string
  acceptComunication: string
  acceptTerms: string
}

const formSchema = yup.object().shape({
  document: yup
    .string()
    .test('len', 'Digite seu CPF', (inputValue) => {
      const inputValuelengthWhitOnlyNumbers = inputValue?.replace(
        /\D+/g,
        ''
      ).length

      return inputValuelengthWhitOnlyNumbers === 11
    })
    .test('test-invalid-cpf', 'CPF Inválido', (cpf) => {
      return validate(String(cpf))
    }),
  name: yup
    .string()
    .required('O campo nome é obrigátorio.')
    .matches(/^[A-zÀ-ú\s]+$/, 'Digite apenas seu nome.'),
  phone: yup
    .string()
    .test('len', 'Digite um telefone valido', (inputValue) => {
      const inputValuelengthWhitOnlyNumbers = inputValue?.replace(
        /\D+/g,
        ''
      ).length
      return inputValuelengthWhitOnlyNumbers === 11
    })
    .required('O campo celular é obrigátorio'),
  cellphoneConfirmation: yup
    .string()
    .test('len', 'Digite um telefone valido', (inputValue) => {
      const inputValuelengthWhitOnlyNumbers = inputValue?.replace(
        /\D+/g,
        ''
      ).length
      return inputValuelengthWhitOnlyNumbers === 11
    })
    .required('O campo confirme o celular é obrigátorio')
    .oneOf([yup.ref('phone'), undefined], 'Confirmação de telefone incorreta'),
  email: yup
    .string()
    .required('E-mail obrigatório')
    .email('Digite um e-mail válido'),

  emailConfirmation: yup
    .string()
    .oneOf([yup.ref('email'), undefined], 'Os emails não conencidem')
    .required('Ta faltalndo esse'),

  acceptComunication: yup.bool().oneOf([true]),
  acceptTerms: yup.bool().oneOf([true])
})

export function Register() {
  const [isLoading, setLoading] = useState(false)
  const [searchParams] = useSearchParams()

  const referenceUserId = searchParams.get('reference')

  const navigate = useNavigate()
  const { state } = useLocation()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, dirtyFields, touchedFields }
  } = useForm<FormData>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      document: state ? state.document : ''
    },
    mode: 'onBlur'
  })

  async function handleRegisterParticipant(values: FormData) {
    try {
      setLoading(true)
      await api.post(
        '/users/create/',
        {
          document: values.document.replace(/\D+/g, ''),
          name: values.name,
          email: values.email,
          phone: values.phone.replace(/\D+/g, '')
        },
        {
          params: {
            reference: referenceUserId
          }
        }
      )

      navigate('/login')
    } catch (error: any) {
      setLoading(false)

      console.log(error)
      if (error.response.data.payload) {
        const fieldError = error.response.data.payload

        const message = fieldError.msg

        switch (fieldError.field) {
          case 'document':
            setError('document', {
              message
            })
            break
          case 'phone':
            setError('phone', {
              message
            })
            break
          case 'email':
            setError('email', {
              message
            })
            break
        }
      }
    }
  }

  return (
    <S.Container>
      <ImageBackground imgUrl={imageBackTwo} />

      <S.FormContainer
        style={{
          backgroundImage: `url(${backOneImage})`
        }}
      >
        <S.HeaderMobile>
          <img id="logo-white" src={logoWhite} alt="Logo Branco" />

          <button
            onClick={() => {
              navigate('/')
            }}
            type="button"
          >
            <img id="close-icon" src={closeIcon} alt="Icone de fechar" />
          </button>
        </S.HeaderMobile>
        <S.Form onSubmit={handleSubmit(handleRegisterParticipant)}>
          <S.ProgressBarMobile>
            <ProgressBar porcentage="11.11%" />
          </S.ProgressBarMobile>
          <S.ProgresseBarDesk>
            <ProgressBar porcentage="11.11%" />
            <button
              onClick={() => {
                navigate('/')
              }}
              type="button"
            >
              <img src={closeIcon} alt="Icone de fechar" />
            </button>
          </S.ProgresseBarDesk>

          <MaskedInput
            register={register}
            value={state ? state.document : undefined}
            readOnly={state}
            isValid={
              (!errors.document && state) || Boolean(touchedFields.document)
            }
            name="document"
            mask="999.999.999-99"
            error={errors.document}
            label="CPF:"
            type="text"
            className="input-container"
          />

          <Input
            register={register}
            isValid={!errors.name && Boolean(dirtyFields.name)}
            name="name"
            error={errors.name}
            label="Nome Completo:"
            type="text"
            className="input-container"
          />

          <MaskedInput
            register={register}
            isValid={!errors.phone && Boolean(touchedFields.phone)}
            name="phone"
            mask="(99) 99999-9999"
            error={errors.phone}
            label="Celular/Whatsapp:"
            type="tel"
            className="input-container"
          />
          <MaskedInput
            register={register}
            isValid={
              !errors.cellphoneConfirmation &&
              Boolean(touchedFields.cellphoneConfirmation)
            }
            name="cellphoneConfirmation"
            mask="(99) 99999-9999"
            error={errors.cellphoneConfirmation}
            label="Confirmação de Celular/Whatsapp:"
            type="tel"
            className="input-container"
          />
          <Input
            register={register}
            isValid={!errors.email && Boolean(dirtyFields.email)}
            name="email"
            error={errors.email}
            label="E-mail:"
            type="email"
            className="input-container"
          />
          <Input
            register={register}
            isValid={
              !errors.emailConfirmation &&
              Boolean(dirtyFields.emailConfirmation)
            }
            name="emailConfirmation"
            error={errors.emailConfirmation}
            label="Confirmação de e-mail:"
            type="email"
            className="input-container"
          />
          <S.TermsCheckBox>
            <S.CheckBox
              {...register('acceptComunication')}
              isError={!!errors.acceptComunication}
              name="acceptComunication"
              type="checkbox"
            />
            <span>Aceito receber comunicações da MEGASONHO pelo WhatsApp</span>
          </S.TermsCheckBox>
          <S.TermsCheckBox>
            <S.CheckBox
              {...register('acceptTerms')}
              isError={!!errors.acceptTerms}
              name="acceptTerms"
              type="checkbox"
            />
            <span>
              Eu li, estou ciente das condições de tratamento dos meus dados
              pessoais e dou meu consentimento, quando aplicável, conforme
              descrito nesta <Link to={'/'}> Política de Privacidade. </Link>
            </span>
          </S.TermsCheckBox>

          <Button isLoading={isLoading} disabled={isLoading} type="submit">
            <span>Enviar</span>
          </Button>
        </S.Form>
        <GradientLine />
      </S.FormContainer>
    </S.Container>
  )
}
