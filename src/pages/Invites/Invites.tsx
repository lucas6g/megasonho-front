import logoWhite from '../../assets/logo-white.svg'
import { MaskedInput } from '../../components/MaskedInput/MaskedInput'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useFieldArray, useForm } from 'react-hook-form'
import { Input } from '../../components/Input/Input'
import backFive from '../../assets/back-five.jpg'
import { useNavigate } from 'react-router-dom'
import * as S from './InviteStyles'
import { ImageBackground } from '../../components/ImageBackground/ImageBackground'
import { GradientLine } from '../../components/GradientLine/GradientLine'
import { Button } from '../../components/Button/Button'
import { ProgressBar } from '../../components/ProgressBar/ProgressBar'
import mickeyHeadGreenIcon from '../../assets/mickey-green-head.svg'
import mickeyHeadRedIcon from '../../assets/mickey-red-head.svg'
import { IndicationLabel } from './InviteStyles'
import api from '../../services/api'
import { useState } from 'react'

interface FormValues {
  friends: Array<{
    indication?: string
    name: string
    phone: string
  }>
}

const formSchema = yup.object().shape({
  friends: yup.array().of(
    yup.object().shape({
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
        .required('O campo celular é obrigátorio')
    })
  )
})

export function Invites() {
  const [isLoading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleInvitation(values: FormValues) {
    const formatedFriends = values.friends.map((friend) => {
      return {
        name: friend.name,
        phone: friend.phone.replace(/\D+/g, '')
      }
    })

    console.log(formatedFriends)

    try {
      setLoading(true)
      await api.post('/inviteds/create', formatedFriends)
      navigate('/share-link')
    } catch (error) {
      setLoading(false)
      navigate('/share-link')
    }
  }

  const {
    control,
    handleSubmit,
    register,
    formState: { errors, dirtyFields, touchedFields }
  } = useForm<FormValues>({
    defaultValues: {
      friends: [
        { name: '', phone: '', indication: 'Primeiro Indicado:' },
        { name: '', phone: '', indication: 'Segundo Indicado:' },
        { name: '', phone: '', indication: 'Terceiro Indicado:' }
      ]
    },
    resolver: yupResolver(formSchema),
    mode: 'onBlur'
  })

  const { fields: friends } = useFieldArray({
    control,
    name: 'friends'
  })

  return (
    <S.Container>
      <ImageBackground imgUrl={backFive} />

      <S.FormContainer
        style={{
          backgroundImage: `url(${backFive})`
        }}
      >
        <S.HeaderMobile>
          <img id="logo-white" src={logoWhite} alt="Logo Branco" />
        </S.HeaderMobile>
        <S.Form onSubmit={handleSubmit(handleInvitation)}>
          <ProgressBar porcentage="55.55%" />

          <h1>Aqui será um título em destaque 🛫</h1>

          <p>
            Aqui será uma descrição para completar o título e falar o número da
            sorte para o usuário:
          </p>

          {friends.map((friend, index) => {
            return (
              <div key={friend.id}>
                <IndicationLabel>
                  <img
                    src={
                      errors.friends?.[index]?.name ??
                      errors.friends?.[index]?.phone
                        ? mickeyHeadRedIcon
                        : mickeyHeadGreenIcon
                    }
                    alt="Icone da Cabeça do Mickey"
                  />
                  <strong>{friend.indication}</strong>
                </IndicationLabel>
                <Input
                  register={register}
                  isValid={
                    !errors.friends?.[index]?.name &&
                    Boolean(dirtyFields.friends?.[index]?.name)
                  }
                  name={`friends.${index}.name`}
                  error={errors.friends?.[index]?.name}
                  label="Nome Completo:"
                  type="text"
                  className="input-container"
                />

                <MaskedInput
                  register={register}
                  isValid={
                    !errors.friends?.[index]?.phone &&
                    Boolean(touchedFields.friends?.[index]?.phone)
                  }
                  name={`friends.${index}.phone`}
                  mask="(99) 99999-9999"
                  error={errors.friends?.[index]?.phone}
                  label="Celular/Whatsapp:"
                  type="tel"
                  className="input-container"
                />
              </div>
            )
          })}

          <Button isLoading={isLoading} type="submit">
            <span>Continuar</span>
          </Button>
        </S.Form>
        <GradientLine />
      </S.FormContainer>
    </S.Container>
  )
}
