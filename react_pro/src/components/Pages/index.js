import React, {useState} from 'react'
import Footer from '../Footer/index'
import HeroSection from '../HeroSection'
import InfoSection from '../InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../InfoSection/Data'
import Services from '../Services'
import Navbar from '../navbar'
import Sidebar from '../Sidebar'


const Home = () => {

const[isOpen, setIsOpen] = useState(false)

const toggle = () =>{
    setIsOpen(!isOpen)
}

    return (
        <>
        
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services/>
            <InfoSection {...homeObjThree}/>
            <Footer />
            
        </>
    )
}

export default Home
