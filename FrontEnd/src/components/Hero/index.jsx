import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElements'
import { useSelector } from 'react-redux'
const msg="Sign up for a new accoun today and Make an appointment quickly with your doctor!";
const Hero = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover)
  }
  const LoggedUser = useSelector((state) => state.user.loggedUser);

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>{LoggedUser==='' ? "Virtual Hospital" :"Welcome"} </HeroH1>
        <HeroP>{LoggedUser==="" && msg}</HeroP>
        <HeroBtnWrapper>
          {LoggedUser===''&& <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'       smooth={true} duration={500} spy={true} exact='true' offset={-80}>
            Get Started {hover ? <ArrowForward /> : <ArrowRight/>}
          </Button>}
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
