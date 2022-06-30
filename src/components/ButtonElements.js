import styled from 'styled-components'
import {Link} from 'react-scroll'


export const Button = styled(Link)`
Border-radius: 50px;
background: ${({ primary }) => (primary ? '#DB1962' : '#000')};
white-space: nowrap;
padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
color : ${({dark}) => (dark ? '#fff' : '#fff')};
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
font-weight: bold ;
border: none;
cursor: pointer;
display: flex;
text-decoration: none;
justify-content: center;
align-items: center;
transition: all 0.2 ease-in-out;
&:hover {
transition: all 0.2s ease-in-outerHeight;
color:black;
font-weight: bold;
background: ${({ primary }) => (primary ? '#fff' : '#DB1962')};
}
`

