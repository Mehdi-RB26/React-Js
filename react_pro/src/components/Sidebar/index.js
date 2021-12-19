import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper,  SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements'


const Sidebar = ({toggle , isOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu> 
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>
                        Try Us
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                <SidebarRoute to="/Home2">Start Now</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
