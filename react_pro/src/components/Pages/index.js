import React, {useState} from 'react'
import Footer from '../Footer/index'
import HeroSection from '../HeroSection'
import InfoSection from '../InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../InfoSection/Data'
import Navbar from '../navbar/Navbar'
import Services from '../Services'

const Home = () => {

/*const[isOpen, setIsOpen] = useState(false)

const toggle = () =>{
    setIsOpen(!isOpen)
}*/

    return (
        <>
        
            <Navbar />
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
