


import styled from 'styled-components'
import './App.css'
import HangmenDrawing from './components/hangmen-drawing copy'
import HangmenWord from './components/hangmen-word copy'
import Keyboard from './components/keyboard'
import { useCallback, useEffect, useState } from 'react'


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
const words = ['gilmar', 'veronica', 'divina', 'gaspazia']

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const incorrectGuesses = guessedLetters.filter(letter => !wordToGuess.includes(letter))
  const correctGuesses = guessedLetters.filter((letter) => wordToGuess.includes(letter))

  const isLoser = incorrectGuesses.length >= 6;
  const isWinner = wordToGuess.split('').every((letter) => guessedLetters.includes(letter))


  const addGuessedLetters = useCallback((letter: string) => {
    if (guessedLetters.includes(letter)||isLoser|| isWinner) return
    setGuessedLetters((guessedLetters) => [...guessedLetters, letter]
    )
  }, [guessedLetters])

  useEffect(() => {
    const handler = ((e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return
      e.preventDefault()
      addGuessedLetters(key)
    }) as unknown as EventListener
    document.addEventListener('keypress', handler)

    return (() => {
      document.removeEventListener('keypress', handler)
    })
  }, [guessedLetters])


  return (
    <Wrapper>
      <HangmanPart >
        {isLoser && "Você perdeu, atualize a pagina !"}
        { isWinner && "Parabéns você venceu, atualize a pagina !"}
        <h3>Jogo da Velha</h3>
        <HangmenDrawing numberOfGuesses={incorrectGuesses.length} />
        <HangmenWord reveal={isLoser} guessedLetters={guessedLetters} word={wordToGuess} />

      </HangmanPart >
      <Keyboard
        disabled={isLoser || isWinner}
        activeLetters={correctGuesses}
        inactiveLetters={incorrectGuesses}
        addGuessedLetters={addGuessedLetters}
      />
    </Wrapper>
  )
}

export default App
