


import styled from 'styled-components'
import './App.css'
import HangmenDrawing from './components/hangmen-drawing copy'
import HangmenWord from './components/hangmen-word copy'
import Keyboard from './components/keyboard'


const Wrapper = styled.div`
display:flex;
flex-direction: column;
align-items: center;
gap: 4rem;

`
const HangmanPart = styled.div`
display:flex;
flex-direction: column;
gap: 3rem;
width:375px ;

`
function App() {

  return (
    <Wrapper>
      <HangmanPart >

        <h3>Jogo da Velha</h3>
        <HangmenDrawing />
        <HangmenWord />

      </HangmanPart >
      <Keyboard />
    </Wrapper>
  )
}

export default App
