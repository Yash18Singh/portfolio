import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Design, Develope} from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:"100%";
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;


`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
        <Box>
          <LogoComponent theme='light'/>
          <SocialIcons theme='light'/>
          <PowerButton/>
          <ParticleComponent theme='light'/>
          <Main>
            <Title>
              <Design width={40} height={40} /> DESIGNER
            </Title>

            <Description>
              I am passionate about creating simple, elegant, and visually appealing designs that prioritize both aesthetics and usability.
            </Description>
            
            <Description>
              <strong>I take great joy in transforming these designs into clean, functional code that brings ideas to life on the web.</strong>
            </Description>
            
            <Description>
              <strong>Tools I Master:</strong> I work with a range of modern tools, including <em>CSS</em>, <em>Styled Components</em>, <em>TailwindCSS</em>, <em>Material-UI</em>, and <em>Figma</em>, to build responsive, interactive, and user-friendly interfaces.
            </Description>

          </Main>

          <Main>
            <Title>
              <Develope width={40} height={40} /> DEVELOPER
            </Title>

            <Description>
              I specialize in building highly functional web and mobile applications, transforming concepts into seamless user experiences with my technical expertise.
            </Description>
            
            <Description>
              <strong>Core Skills:</strong> With proficiency in <em>ReactJS</em>, <em>React Native</em>, <em>NextJS</em>, <em>HTML</em>, <em>JavaScript</em>, <em>Redux</em>, <em>NodeJS</em>, <em>ExpressJS</em>, <em>MongoDB</em>, <em>Strapi</em>, and <em>MySQL</em>, I am well-equipped to develop full-stack applications and dynamic, scalable solutions.
            </Description>
            
            <Description>
              <strong>Development Tools:</strong> I use <em>VSCode</em> for efficient coding, <em>Git</em> and <em>GitHub</em> for version control, and deploy applications seamlessly through <em>Vercel</em> to ensure smooth delivery and scalability.
            </Description>

          </Main>
        </Box>
    </ThemeProvider>
    )
}

export default MySkillsPage
