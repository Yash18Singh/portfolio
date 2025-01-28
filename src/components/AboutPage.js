import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main =  styled.div`
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`




const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
        <Box>
        
                <LogoComponent theme='dark'/>
                <SocialIcons theme='dark'/>
                <PowerButton />
                <ParticleComponent theme='dark' />
        
                <Spaceman>
                    <img src={astronaut} alt="spaceman" />
                </Spaceman>    
                <Main>
                  I'm a 23-year-old enthusiastic **MERN Stack Developer** and **Cross-Platform Mobile App Developer** located in **New Delhi, India**. 
                  <br/><br/>
                  I've completed my **BSc (Hons.) in Computer Science** from **Dyal Singh College**, University of Delhi, and am currently pursuing a **Master of Computer Applications** from **Guru Gobind Singh Indraprastha University**. 
                  <br/><br/>
                  I am passionate about exploring new technologies and constantly improving my skills in **problem-solving**, with a strong focus on **LeetCode**, **Data Structures**, and **Algorithms**.
                  <br/><br/>
                  I'm excited to apply my potential to build impactful and innovative solutions in both web and mobile app development.
                  <br/><br/>
                  **Email**: yashwantsingh071@gmail.com
                  <br/><br/>
                  **Mob**: +91-9871517759
                </Main>

        
                {/* <BigTitle text="ABOUT" top="10%" left="5%" /> */}
        
        
                </Box>
        
                </ThemeProvider>
        
    )
}

export default AboutPage
