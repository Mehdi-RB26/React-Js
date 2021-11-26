import React, {useState} from 'react';
import Video from '../Videos/video.mp4';
import {Button} from '../ButtonElements';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElemnts'



const HeroSection = () => {

        const [hover, setHover] = useState(false)

        const onHover = () => {
            setHover(!hover)
        }


    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Car Auction Made Easy</HeroH1>
                <HeroP>
                    Sign up for a new account today and receive a membership for 25% OFF.
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                    to="Signup"
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
