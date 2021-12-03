import React, {useEffect} from 'react'
import { Button } from '../ButtonElements';
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, SubTitle, BtnWrap, ImgWrap, Img} from './InfoElements'
import Aos from 'aos';
import "aos/dist/aos.css";


const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper data-Aos="fade-left">
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <SubTitle darkText={darkText}>{description}</SubTitle>
                                <BtnWrap>
                                    <Button to="home"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}

                                    
                                    >{buttonLabel} </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                        <ImgWrap>
                        <Img src={img} alt={alt}/>
                        </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection