import cloverIcon from '../../assets/clover.svg'
import mikeyHeadIcon from '../../assets/mickey.svg'
import minnieHeadIcon from '../../assets/minnie.svg'
import castleIcon from '../../assets/castle.svg'
import headAndCastleIcon from '../../assets/head-and-casttle.svg'
import headAndCloverIcon from '../../assets/head-and-clover.svg'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { validate } from 'gerador-validador-cpf'
import { useForm } from 'react-hook-form'
import * as S from './SectionTwoStyles'
import { MaskedInput } from '../MaskedInput/MaskedInput'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
import { Button } from '../Button/Button'

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
export function SectionTwo() {
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
      setError('document', {
        message: error.response.data.message
      })
    }
  }

  return (
    <S.Container>
      <S.Content>
        <S.HeadAndCloverContainer>
          <img src={headAndCloverIcon} alt="Cabeça do mickey" />
        </S.HeadAndCloverContainer>
        <S.InputBox>
          <h1>
            Realize seu sonho de criança, viaje para a Disney com sua família.
          </h1>
          <p>
            Se emocione com o show de fogos do castelo da Cinderela e eterniza
            essa realização tirando fotos incríveis do seus filhos com Mickey.{' '}
            <strong>Faça o cadastro é grátis!</strong>
          </p>
          <S.CompeteButtonContainer
            isError={!!errors.document}
            onSubmit={handleSubmit(handleCheckDocument)}
          >
            <MaskedInput
              register={register}
              isValid={!errors.document && isSubmitSuccessful}
              name="document"
              mask="999.999.999-99"
              error={errors.document}
              placeholder="Digite o seu CPF"
              type="text"
              className="document-container"
            />
            <Button>Concorrer</Button>
          </S.CompeteButtonContainer>
        </S.InputBox>
        <S.HeadAndCastleContainer>
          <img src={headAndCastleIcon} alt="Cabeça do mickey" />
        </S.HeadAndCastleContainer>
        <S.PicturesContainer>
          <img id="mikey-head" src={mikeyHeadIcon} alt="Cabeça do mickey" />
          <img id="clover-icon" src={cloverIcon} alt="Imagem de um trevo" />
          <img id="disney-castle" src={castleIcon} alt="Castelo da disney" />
          <img
            id="minnie-head-icon"
            src={minnieHeadIcon}
            alt="Cabeça da minnie"
          />
        </S.PicturesContainer>
      </S.Content>
    </S.Container>
  )
}
