import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'






export const Nav = styled.nav`
background: ${({ scrollNav}) => (scrollNav ? '#0c0c0c' : 'transparent' )};
height: 100px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;
margin-top: -100px;


@media screen and (max-width: 960px){
    transition: 0.8s all ease;
}
`

export const NavbarContainer = styled.div`
height: 37px;
display: flex;
justify-content: space-between;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
font-family: 'Americorps';
color: #fff;
justify-self: flex-start;
cursor: pointer;
font-size: 2.5rem;
display: flex;
aling-items: center;
margin-left: -210px;
font-weight: bold;
text-decoration: none;

&:hover {
color: white;}
`

export const Span = styled.div`
font-family: 'Americorps';
color: #DB1962;
justify-self: flex-start;
cursor: pointer;
font-size: 2.5rem;
display: flex;
aling-items: center;
font-weight: bold;
text-decoration: none;


`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {
    display: block;
    position:  absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
}
`

export const NavMenu = styled.ul`

font-family: 'Arial';
font-size: 1.5em;
display: flex;
align-items: center;
list-style: none;
padding-top: 27px;
margin-right: 80px;
text-align: center;

&:hover {
color: '#DB1962';}

@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavItem = styled.li`
height: 80px;
`

export const NavLinks = styled(LinkS)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1.3rem;
height: 100%;
cursor: pointer;

&:hover {
color: #DB1962 ;}

&.active {
    border-bottom: 3px solid #DB1962;
}
`

export const NavBtn = styled.nav`
padding-top: 25px;
font-family: 'Alfa Slab One', cursive;
display: flex;
align-items: center;

@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavBtnLink = styled(LinkR)`
font-family: 'Arial';
font-weight: bold;
border-radius: 50px;
background: #DB1962;
white-space: nowrap;
margin-bottom: 10px;
margin-right: -250px;
padding: 10px 43px;
color: #fff;
font-size: 18px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all ease-in-out;
    background: #fff;
    color: #010606;
}
`