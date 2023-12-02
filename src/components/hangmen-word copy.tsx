import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;

  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`

interface HangmanWordProps{
  word: string
  guessedLetters: string[]
}

export default function HangmenWord({word,guessedLetters}: HangmanWordProps) {


  return <Wrapper>
    {
      word.split("").map((letter, index) => (
        <span 
        style={{borderBottom:'0.1em solid white',  width:' 30px'}} 
        key={index}
        ><span  
          style={{visibility: guessedLetters.includes(letter)
            ? 'visible'
            : 'hidden'}}
          >
            {letter}</span>
   
          </span>
      ))

    }

  </Wrapper>


}
