import Head from 'next/head'
import styled from 'styled-components'
import { AppLayout } from '../components/AppLayout'
import { Button } from '../components/Button'
import Github from '../components/Icons/Github'

export default function Home () {
  return (
    <>
      <Head>
        <title>TwitDev🐦</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <AppLayout>

        <Login>
          <WrapperLogo>
            <Logo src='hdjesus.png' />
          </WrapperLogo>

          <TitleApp>TwitDev</TitleApp>

          <DescriptionApp>
            Talk about development <br /> with developers 🧑🏻‍💻👩🏼‍💻{' '}
          </DescriptionApp>

          <ButtonLoginWithGithub>
            <Github width={24} height={24} /> <span>Login with Github</span>
          </ButtonLoginWithGithub>

        </Login>
      </AppLayout>
    </>
  )
}

const Login = styled.article`
  height: 100%;
  display: grid;
  place-items: center;
  place-content: center;
  font-family: 'Courier New', Courier, monospace;
`
const TitleApp = styled.h1`
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 16px;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.primary};
`
const DescriptionApp = styled.h2`
  font-size: 21px;
  color: ${({ theme }) => theme.colors.secondary};
`

const Logo = styled.img`
  width: 100%;
`

const ButtonLoginWithGithub = styled(Button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0;
  margin-top: 15px;
  padding: 8px 24px;
  border-radius: 9999px;
  color: #fff;
  font-weight: 800;
  background: ${({ theme }) => theme.colors.lightGray};
  font-size: 16px;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

 span {
    margin-left: 10px;
  }
`

const WrapperLogo = styled.figure`
width: 100%;
max-width: 100px;

`
