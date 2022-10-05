import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  outline:0;
}


body, input, textarea, button {
  font-family: ${({ theme }) => theme.fonts.hind},  sans-serif;
}



button {
  cursor: pointer;
}

`
