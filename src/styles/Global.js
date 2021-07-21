import { createGlobalStyle } from 'styled-components'
import { addOpacityToColor } from './utils'

const backgroundColor = addOpacityToColor('#0099ff', 0.3)

export const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  box-sizing:border-box;
  margin: 0;
}

body{
  
  background: radial-gradient(${backgroundColor} 1px, #fdfdfd 1px),radial-gradient(${backgroundColor} 1px ,#fdfdfd 1px);
background-position: 0 0,25px 25px;
background-size: 50px 50px;


}

`
