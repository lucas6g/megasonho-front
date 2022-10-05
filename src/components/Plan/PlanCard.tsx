import { ButtonHTMLAttributes } from 'react'

import * as S from './PlansCardStyles'

interface PlanCardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  numbersQuantity: number
  price: string
  pricePernumber: string
}

export function PlanCard({
  numbersQuantity,
  price,
  pricePernumber,
  ...rest
}: PlanCardProps) {
  return (
    <S.Plan {...rest}>
      <div>
        <div className="img-back"></div>
        <span>{numbersQuantity} Números</span>
      </div>
      <strong>{price}</strong>
      <span className="price-number">{pricePernumber} por número</span>
    </S.Plan>
  )
}
