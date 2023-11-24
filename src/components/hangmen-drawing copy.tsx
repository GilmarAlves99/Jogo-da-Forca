import styled from 'styled-components'

const Base = styled.div`
  height: 10px;
  width: 250px;
  background-color: #6b6150; 
  bottom:0;
  position: absolute;
  margin-left: 80px;
`
const Vertical = styled.div`
  height: 250px;
  width: 10px;
  background-color: #6b6150; 
`
const Horizontal = styled.div`
  height: 10px;
  width: 140px;
  background-color: #6b6150; 
  position: absolute;
margin-left: 130px;
`
const VerticalLineSmall = styled.div`
  height: 40px;
  width: 10px;
  position: absolute;
  background-color: #6b6150; 
  margin-left: 280px;
`

const Head = styled.div`
  height:30px;
  width: 30px;
  border: 8px solid white;
  border-radius: 50%;
  position: absolute;
  background-color: wheat; 
  margin-left: 280px;
  top: 45px;


`
const Body = styled.div`
  height:70px;
  width: 10px;
  position: absolute;
  background-color: wheat; 
  margin-left: 50px;
  top: 90px;
  margin-left: 280px;
`
const RightArm = styled.div`
  height:10px;
  width: 40px;
  position: absolute;
  background-color: wheat; 
  top: 91px;
  margin-left: 320px;
  rotate: -30deg;
`

const LeftArm = styled.div`
  height:10px;
  width: 40px;
  position: absolute;
  background-color: wheat; 
  top: 91px;
  margin-left: 240px;
  rotate:30deg;
 
`
const RightLeg = styled.div`
  height:10px;
  width: 40px;
  position: absolute;
  background-color:  wheat; 
  top: 160px;
  margin-left: 320px;
rotate: 30deg;
`
const LeftLeg = styled.div`
  height:10px;
  width: 40px;
  position: absolute;
  background-color: wheat; 
  top: 160px;
  margin-left: 240px;
rotate: -30deg;
 
`
export default function HangmenDrawing() {
  return <div style={{
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }}>
    <Head />
    <Body />
    <RightArm />
    <LeftArm />
    <RightLeg />
    <LeftLeg />
    <VerticalLineSmall />
    <Horizontal />
    <Vertical />
    <Base />
  </div>

}
