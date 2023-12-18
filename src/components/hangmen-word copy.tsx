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
  reveal:boolean
  word: string
  guessedLetters: string[]
}

export default function HangmenWord({reveal,word,guessedLetters}: HangmanWordProps) {


  return <Wrapper>
    {
      word.split("").map((letter, index) => (
        <span 
        style={{borderBottom:'0.1em solid white',  width:' 30px'}} 
        key={index}
        ><span  
          style={{visibility: guessedLetters.includes(letter) || reveal
            ? 'visible'
            : 'hidden',
          color: !guessedLetters.includes(letter) && reveal ? 'rgb(200, 0, 0)' : 'white'
          }}
          >
            {letter}</span>
   
          </span>
      ))

    }

  </Wrapper>


}
