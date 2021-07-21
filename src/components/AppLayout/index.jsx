import styled, { css } from 'styled-components'
import { devices } from '../../styles/breakpoints'

const centerGridWrapper = css`
  display: grid;
  place-items: center;
`
export const AppLayout = ({ children }) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  ${centerGridWrapper}
  min-height: 100vh;
  width: 100%;
`

const Content = styled.section`
 
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.white};

  @media ${devices.mobileL} {
    width: 450px;
    height: 90vh;
  }
`
