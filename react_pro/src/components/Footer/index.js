import React from 'react'
import { FooterContainer, FooterLinksWrapper, FooterWrap, FooterLinksContainer, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitch} from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">How It Works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Careers</FooterLink>
                                <FooterLink to="/signin">Investors</FooterLink>
                                <FooterLink to="/signin">Terms of service</FooterLink>   
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">How It Works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Careers</FooterLink>
                                <FooterLink to="/signin">Investors</FooterLink>
                                <FooterLink to="/signin">Terms of service</FooterLink>   
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">How It Works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Careers</FooterLink>
                                <FooterLink to="/signin">Investors</FooterLink>
                                <FooterLink to="/signin">Terms of service</FooterLink>   
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to="/signin">FACEBOOK</FooterLink>
                                <FooterLink to="/signin">INSTAGRAM</FooterLink>
                                <FooterLink to="/signin">YOUTUBE</FooterLink>
                                <FooterLink to="/signin">TWITTER</FooterLink>
                                <FooterLink to="/signin">TWITCH</FooterLink>   
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            CAR AucTion
                        </SocialLogo>
                        <WebsiteRights>CAR AucTion ® {new Date().getFullYear()}
                         All Rights Reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank"
                            arial-label="Facebook">
                            <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            arial-label="Instagram">
                            <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            arial-label="Youtube">
                            <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            arial-label="Twitch">
                            <FaTwitch />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
