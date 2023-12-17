


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
  const [wordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const incorrectGuesses = guessedLetters.filter(letter => !wordToGuess.includes(letter))
  const correctGuesses = guessedLetters.filter((letter)=> wordToGuess.includes(letter))



  const addGuessedLetters = useCallback((letter: string) => {
    if (guessedLetters.includes(letter)) return
    setGuessedLetters((guessedLetters) => [...guessedLetters, letter]
    )
  },[guessedLetters])

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
  /*
  const useKeyPress = (callback: (key: string) => void) => {
    useEffect(() => {
      const handleKeyDown  = (e: KeyboardEvent) => {
        const key = e.key.toLowerCase(); // Convertendo para minúsculas para ter uma correspondência mais ampla
        if (key.match(/^[a-z]$/)) { // Verificando se é uma letra
          e.preventDefault();
          callback(key);
        }
      };
  
      document.addEventListener('keypress', handleKeyDown );
  
      return () => {
        document.removeEventListener('keypress', handleKeyDown );
      };
    }, [callback]);
  };
  
  useKeyPress(addGuessedLetters);
  */



  return (
    <Wrapper>
      <HangmanPart >

        <h3>Jogo da Velha</h3>
        <HangmenDrawing numberOfGuesses={incorrectGuesses.length} />
        <HangmenWord guessedLetters={guessedLetters} word={wordToGuess} />

      </HangmanPart >
      <Keyboard 
      activeLetters={correctGuesses}
      inactiveLetters={incorrectGuesses}
      addGuessedLetters={addGuessedLetters}
      />
    </Wrapper>
  )
}

export default App
