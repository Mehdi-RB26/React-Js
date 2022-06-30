import React, {useEffect, useState} from 'react';
import Video from '../Videos/video.mp4';
import {Button} from '../ButtonElements';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElemnts'
import Aos from 'aos';
import "aos/dist/aos.css";


const HeroSection = () => {

        const [hover, setHover] = useState(false)

        const onHover = () => {
            setHover(!hover)
        }


        useEffect(() => {
            Aos.init({duration: 2000});
        }, []);

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent data-Aos="fade-up">
                <HeroH1>Car auction made easy</HeroH1>
                <HeroP>
                    Sign up for a new account today and receive a membership for 25% OFF.
                    
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                    
                    onMouseEnter={onHover}  
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    >
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
