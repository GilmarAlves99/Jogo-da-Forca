


import styled from 'styled-components'
import './App.css'
import HangmenDrawing from './components/hangmen-drawing copy'
import HangmenWord from './components/hangmen-word copy'
import Keyboard from './components/keyboard'
import { useState } from 'react'


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
const words = ['Gilmar', 'Verônica', 'Divina', 'Gaspazia']

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetters, setGuesseLetters] = useState<string[]>([])
  const incorrectGuesses = guessedLetters.filter(letter => !wordToGuess.includes(letter))

  return (
    <Wrapper>
      <HangmanPart >

        <h3>Jogo da Velha</h3>
        <HangmenDrawing numberOfGuesses={incorrectGuesses.length} />
        <HangmenWord guessedLetters={guessedLetters} word={wordToGuess} />

      </HangmanPart >
      <Keyboard />
    </Wrapper>
  )
}

export default App
