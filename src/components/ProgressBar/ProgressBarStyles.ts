import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Bar = styled.div`
  background-color: #efefef;
  height: 10px;
  width: 100%;
  border-radius: 100px;
`

interface ProgressProps {
  porcentage: string
}
export const Progress = styled.div<ProgressProps>`
  height: 100%;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.blue};
  width: ${props => props.porcentage};
`

interface IconContainerProps {
  porcentage: string
}
export const IconContainer = styled.div<IconContainerProps>`
  width: ${props => props.porcentage};
  img {
    margin-left: calc(100% - 28px);
  }
`
