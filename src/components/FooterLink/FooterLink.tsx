import { AnchorHTMLAttributes } from 'react'
import { Container } from './FooterLinkStyles'
import { Link } from 'react-router-dom'

interface FooterLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  linkText: string
}

export function FooterLink({ linkText, href, ...rest }: FooterLinkProps) {
  return (
    <Link style={{ textDecoration: 'none' }} to={String(href)}>
      <Container {...rest}>{linkText}</Container>
    </Link>
  )
}
