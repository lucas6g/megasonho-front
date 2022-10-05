import { Header } from '../../components/Header/Header'
import { validate } from 'gerador-validador-cpf'
import * as S from './HomeStyles'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { MaskedInput } from '../../components/MaskedInput/MaskedInput'
import { SectionTwo } from '../../components/SectionTwo/SectionTwo'
import { SectionTree } from '../../components/SectionTree/SectionTree'
import { SectionVideo } from '../../components/SectionVideo/SectionVideo'
import { SectionFive } from '../../components/SectionFive/SetionFive'
import { Footer } from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
import { Button } from '../../components/Button/Button'
import { useState } from 'react'

interface FormData {
  document: string
}

const formSchema = yup.object().shape({
  document: yup
    .string()
    .test('len', 'CPF Incompleto', (inputValue) => {
      const inputValuelengthWhitOnlyNumbers = inputValue?.replace(
        /\D+/g,
        ''
      ).length

      return inputValuelengthWhitOnlyNumbers === 11
    })
    .test('test-invalid-cpf', 'CPF Inválido', (cpf) => {
      return validate(String(cpf))
    })
})

export function Home() {
  const [isLoading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitSuccessful }
  } = useForm<FormData>({
    resolver: yupResolver(formSchema),
    mode: 'onBlur'
  })

  const navigate = useNavigate()

  async function handleCheckDocument(values: FormData) {
    try {
      setLoading(true)
      await api.get('/users/check-document', {
        params: {
          document: values.document.replace(/\D+/g, '')
        }
      })
      navigate('/register', {
        state: {
          document: values.document
        }
      })
    } catch (error: any) {
      setLoading(false)
      setError('document', {
        message: error.response.data.message
      })
    }
  }

  return (
    <>
      <Header />
      <S.HeroSection>
        <S.GradinetBackground>
          <S.HeroContent>
            <div>
              <S.HeroTitle>
                Realize o sonho de viajar para Walt Disney World
              </S.HeroTitle>
              <S.HeroSubtitle>
                Se inscreva e concorra a viagem de seus sonhos para sua família
                e amigos. É grátis!
              </S.HeroSubtitle>
            </div>
            <S.DocumentFormContainer>
              <S.DocumentForm onSubmit={handleSubmit(handleCheckDocument)}>
                <S.DocumentFormTitle>Cadastre e Concorra</S.DocumentFormTitle>
                <MaskedInput
                  register={register}
                  isValid={!errors.document && isSubmitSuccessful}
                  name="document"
                  mask="999.999.999-99"
                  error={errors.document}
                  placeholder="Digite o seu CPF"
                  type="text"
                />
                <Button isLoading={isLoading} type="submit">
                  <span> Continuar</span>
                </Button>
              </S.DocumentForm>
            </S.DocumentFormContainer>
          </S.HeroContent>
        </S.GradinetBackground>
      </S.HeroSection>
      <SectionTwo />
      <SectionTree />
      <SectionVideo />
      <SectionFive />
      <Footer />
    </>
  )
}
