import logoWhite from '../../assets/logo-white.svg'
import receita from '../../assets/receita.png'
import instagranIcon from '../../assets/instagran.svg'
import whatsApp from '../../assets/whatsapp.svg'
import { FooterLink } from '../FooterLink/FooterLink'
import { Link } from 'react-router-dom'
import * as S from './FooterStyles'

export function Footer() {
  return (
    <S.Container>
      <S.HeaderContainer>
        <S.FooterHeader>
          <Link to="/">
            <img src={logoWhite} alt="Logo Branco" />
          </Link>

          <div>
            <a
              href="https://api.whatsapp.com/send?1=pt_br&phone=5511973796061&text=Ola%20MEGASONHO!"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsApp} alt="Icone WhatsApp" />
            </a>
            <a
              href="https://www.instagram.com/megasonho.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagranIcon} alt="Icone instagran" />
            </a>
          </div>
        </S.FooterHeader>
      </S.HeaderContainer>

      <S.FooterContent>
        <S.CertificateContent>
          <S.LinksBlock>
            <S.LinksBlockTitle>Saiba mais</S.LinksBlockTitle>
            <FooterLink linkText="Quem somos" href="#" />
            <FooterLink linkText="Termos de Uso" href="#" />
            <FooterLink linkText="Política de Privacidade" href="#" />
            <FooterLink linkText="Regurlamento" href="#" />
            <FooterLink linkText="Contato" href="#" />
          </S.LinksBlock>

          <S.CertificateBox>
            <div>
              <S.LinksBlockTitle>Certificado de Autorização</S.LinksBlockTitle>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </div>
            <img src={receita} alt="Receita Federal" />
          </S.CertificateBox>
        </S.CertificateContent>
      </S.FooterContent>
      <S.FooterBottom>
        <S.FooterBottomContent>
          <div>
            <span>MEGASONHO ® 2022</span>
            <span>R. Augusto Dias - Juazeiro do Norte - Ceará</span>
            <span>CNPJ: 000000000000</span>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </S.FooterBottomContent>
      </S.FooterBottom>
    </S.Container>
  )
}
