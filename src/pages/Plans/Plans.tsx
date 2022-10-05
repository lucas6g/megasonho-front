import logoWhite from '../../assets/logo-white.svg'
import backSix from '../../assets/back-six.jpg'
import numbers from '../../assets/numbers.svg'
import * as S from './PlansStyles'
import Countdown, { zeroPad } from 'react-countdown'
import { ImageBackground } from '../../components/ImageBackground/ImageBackground'
import { ProgressBar } from '../../components/ProgressBar/ProgressBar'
import { GradientLine } from '../../components/GradientLine/GradientLine'
import { useEffect, useState } from 'react'
import { PlanCard } from '../../components/Plan/PlanCard'
import api from '../../services/api'
import { priceFormater } from '../../utils/priceFormater'
import { useNavigate } from 'react-router-dom'

interface Plan {
  uuid: string
  numbersQuantity: number
  price: string
  pricePerNumber: string
}
export function Plans() {
  const [data, setData] = useState(
    { date: Date.now(), delay: 1000 * 60 * 10 } // 10 minutes
  )

  const [coumonPlans, setCoumonPlans] = useState<Plan[]>([])
  const [specialPlan, setSpecialPlan] = useState<Plan>({} as Plan)

  const wantedDelay = 1000 * 60 * 10 // 10 minutes

  const navigate = useNavigate()

  async function handleSelectPlan(planId: string) {
    await api.post('/plans/purchase', {
      plan_uuid: planId
    })

    navigate('/payment')
  }

  useEffect(() => {
    api
      .get<Array<{ uuid: string; quantity: number; price: number }>>('/plans')
      .then((response) => {
        const plans = response.data.map((plan) => {
          return {
            uuid: plan.uuid,
            numbersQuantity: plan.quantity,
            price: priceFormater(plan.price),
            pricePerNumber: priceFormater(
              Math.trunc((plan.price / plan.quantity) * 100) / 100
            )
          }
        })

        const coumonPlans = plans.filter((plan) => {
          return plan.numbersQuantity < 100
        })

        const specialPlan = plans.find((plan) => {
          return plan.numbersQuantity === 100
        })
        if (specialPlan) {
          setSpecialPlan(specialPlan)
        }
        setCoumonPlans(coumonPlans)
      })
  }, [])

  useEffect(() => {
    const savedDate = localStorage.getItem('end_date')
    if (savedDate != null && !isNaN(Number(savedDate))) {
      const currentTime = Date.now()
      const delta = parseInt(savedDate, 10) - currentTime

      // Do you reach the end?
      if (delta > wantedDelay) {
        // Yes we clear uour saved end date
        if (String(localStorage.getItem('end_date')).length > 0)
          localStorage.removeItem('end_date')
      } else {
        // No update the end date with the current date
        setData({ date: currentTime, delay: delta })
      }
    }
  }, [])

  return (
    <S.Container>
      <ImageBackground imgUrl={backSix} />

      <S.PlansContainer
        style={{
          backgroundImage: `url(${backSix})`
        }}
      >
        <S.HeaderMobile>
          <img id="logo-white" src={logoWhite} alt="Logo Branco" />
        </S.HeaderMobile>
        <S.PlansContent>
          <ProgressBar porcentage="77.77%" />

          <h1>Aqui será um título em destaque ⏱</h1>

          <p>
            Essa oportunidade de aumentar a sua chance de ganhar e vai acabar
            em:
          </p>

          <S.TimeBox>
            <Countdown
              date={data.date + data.delay}
              onStart={(delta) => {
                // Save the end date
                if (localStorage.getItem('end_date') == null) {
                  localStorage.setItem(
                    'end_date',
                    JSON.stringify(data.date + data.delay)
                  )
                }
              }}
              onComplete={() => {
                if (localStorage.getItem('end_date') != null) {
                  localStorage.removeItem('end_date')
                }
              }}
              renderer={({ minutes, seconds }) => (
                <span>
                  {zeroPad(minutes)}:{zeroPad(seconds)}
                </span>
              )}
            />
          </S.TimeBox>

          <S.LuckNumberPlan100Button
            onClick={async () => {
              handleSelectPlan(specialPlan.uuid)
            }}
          >
            <img src={numbers} alt="100 Numeros da Sorte" />
          </S.LuckNumberPlan100Button>

          <S.NumbersPlansBox>
            {coumonPlans.map((plan) => {
              return (
                <PlanCard
                  key={plan.uuid}
                  numbersQuantity={plan.numbersQuantity}
                  price={plan.price}
                  pricePernumber={plan.pricePerNumber}
                  onClick={async () => {
                    handleSelectPlan(plan.uuid)
                  }}
                />
              )
            })}
          </S.NumbersPlansBox>
        </S.PlansContent>
        <GradientLine />
      </S.PlansContainer>
    </S.Container>
  )
}
